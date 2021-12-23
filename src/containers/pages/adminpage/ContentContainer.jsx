import React, { useEffect, useState } from "react";
import MyPageContent from "../../../components/adminpage";
import get_noticedetail from "../../../service/api/get/get_noticedetail";
import get_managenotice from "../../../service/api/get/get_managenotice";
import { useHistory, useParams } from "react-router-dom";
import get_apply_notice_user from "../../../service/api/get/get_applynoticeuser";
import get_filedownload from "../../../service/api/get/get_filedownload";
import patch_status from "../../../service/api/patch/patch_status"
import { notification } from "antd";

const ContentContainer = ({ role, name }) => {
    //NOTE 전체 페이지 갯수
    const [pageTotalNum, setPageTotalNum] = useState(0);

    //NOTE 선택한 페이지 번호
    const [pagingNum, setPagingNum] = useState(0);

    //NOTE 10개씩 세팅되는 리스트
    const [pageList, setPageList] = useState([]);

    //NOTE 신청한 유저 전체 페이지 갯수
    const [applyUserPageTotalNum, setApplyUserPageTotalNum] = useState(0);

    //NOTE 신청한 유저 선택한 페이지 번호
    const [applyUserPagingNum, setApplyUserPagingNum] = useState(0);


    useEffect(() => {
        getnoticeList(0);
        setPagingNum(0)
    }, [])

    useEffect(() => {
        getnoticeList(pagingNum);
    }, [pagingNum])

    /**
        @description noticelist세팅 
        @function pagingNum변경시
        @detail  get통신후 list 10개씩 세팅 , pagination 세팅
        */
    const getnoticeList = (pickPageNum) => {
        get_managenotice(pickPageNum)
            .then((res) => {
                console.log(res.response);
                console.log(res.response.content);
                console.log(res.response.totalPages);
                setPageTotalNum(res.response.totalPages);
                setPageList([]);
                res.response.content.forEach((lists) => {
                    setPageList((state) => [
                        ...state,
                        {
                            id: lists.id,
                            title: lists.name,
                            tag1: lists.tag1,
                            tag2: lists.tag2,
                            tag3: lists.tag3,
                            adminName: lists.authorName,
                            uploadDay: lists.uploadDay.substring(0, 10),
                        },
                    ]);
                });
            })
            .catch((err) => console.log(err));
    };


    //SECTION detailPage

    const [detailNoticeData, setDetailNoticeData] = useState({
        id: "",
        title: "",
    });
    const history = useHistory();

    /**
           @description notice Onclick시 detail가져와서 표시 
           @function noticeDetailOnclick
           @detail  getDetail -> detail page Open
           */
    const noticeDetailOnclick = (id) => {
        console.log(id);
        setDetailNoticeData((state) => ({ ...state, id: id }));
        get_noticedetail(id)
            .then((res) => {
                console.log("🦷🦷")
                console.log(res.response);
                history.push("/adminpage/" + res.response.notice.id + "/" + res.response.notice.name.replace(/ /g, "-"));
                setDetailNoticeData((state) => ({
                    ...state,
                    title: res.response.notice.name,
                    tag1: res.response.notice.tag1,
                    tag2: res.response.notice.tag2,
                    tag3: res.response.notice.tag3,
                    startDay: res.response.notice.startDay,
                    destDay: res.response.notice.destDay,
                    swurl: res.response.notice.swurl,
                }));
            })
            .catch((err) => {
                console.log(err);
                console.log("detail데이터 불러오기 실패");
            });
    };

    const [applyUsersPageNum, setApplyUsersPageNum] = useState(0)
    const [applyUsers, setApplyUsers] = useState([
        {
            userName: "이채은",
            userId: "201734",
            userFileTitle: "user test.txt",
            userFilePath: "782512c4-6d00-46ba-af62-e40e57a15784.txt",
            status: "wait",
        },
        {
            userName: "지드래곤",
            userId: "20173df4",
            userFileTitle: "user test2.txt",
            userFilePath: "782512c4-6d00-46ba-af62-e40e57a157842.txt",
            status: "wait",
        }
    ])

    let notice_id_params = useParams();


    // NOTE 관리자가 지원서 status 상태 변경
    const [isStatusModalVisible, setIsStatusModalVisible] = useState(false)

    const handleStatusModal = {
        show: () => setIsStatusModalVisible(true),
        close: () => setIsStatusModalVisible(false),
    };

    const statusBtnOnClick = (id) => {
        console.log("🤯🤯")
        // console.log(e.target)
        console.log(id)
        handleStatusModal.show()
    }

    // NOTE here
    const statusChangeOnClick = {
        wait: (userId) => {
            console.log("🤯🤯")
            patch_status(userId, "wait")
                .then((res) => {
                    console.log(res)
                    notification['success']({
                        message: `wait로 업데이트 완료 `,
                        description: '업데이트 성공',
                    })
                    if (applyUsers.filter(users => users.userId === userId)) {
                        setApplyUsers((state) => ([{
                            ...state,
                            status: "wait"

                        }]))
                    }


                })
                .catch((err) => {
                    console.log(err)
                    notification['error']({
                        message: `wait로 업데이트 실패 😥 `,
                        description: '새로고침 후 다시 시도해 주세요',
                    })
                })
        },
        confirm: (userId) => {
            patch_status(userId, "confirm")
                .then((res) => {
                    console.log(res)
                    notification['success']({
                        message: `confirm로 업데이트 완료 `,
                        description: '업데이트 성공',
                    })

                    if (applyUsers.filter(users => users.userId === userId)) {
                        setApplyUsers((state) => ([{
                            ...state,
                            status: "wait"

                        }]))
                    }

                })
                .catch((err) => {
                    console.log(err)
                    notification['error']({
                        message: `confirm로 업데이트 실패 😥 `,
                        description: '새로고침 후 다시 시도해 주세요',
                    })
                })
        },
        reject: (userId) => {
            patch_status(userId, "reject")
                .then((res) => {
                    console.log(res)
                    notification['success']({
                        message: `reject로 업데이트 완료 `,
                        description: '업데이트 성공',
                    })

                    if (applyUsers.filter(users => users.userId === userId)) {
                        setApplyUsers((state) => ([{
                            ...state,
                            status: "wait"

                        }]))
                    }

                })
                .catch((err) => {
                    console.log(err)
                    notification['error']({
                        message: `reject로 업데이트 실패 😥 `,
                        description: '새로고침 후 다시 시도해 주세요',
                    })
                })
        }

    }


    const downloadFileOnClick = (path) => {
        console.log("👑👑")
        console.log(path)
        get_filedownload(path)
            .then((res) => {
                console.log("파일다운로드하기✅")
                console.log(res)
            })
            .catch((err) => {
                console.log(err);
                console.log("파일다운로드하기✅실패");
            })
    }


    /**
    @description 관리자가 작성한 게시물에 지원한 지원서 정보들
    @function getApplyGetUsers
    */

    useEffect(() => {
        console.log("🤯🤯params")
        console.log(notice_id_params)
        console.log(notice_id_params.id)

        if (notice_id_params.id) {


            get_apply_notice_user(notice_id_params.id, applyUsersPageNum)
                .then((res) => {
                    console.log("😶‍🌫️😶‍🌫️")
                    console.log(res.response);
                    setApplyUserPageTotalNum(res.response.totalPages);
                    res.response.content.forEach((users) => {
                        setApplyUsers((state) => ([...state,
                        {
                            userName: users.memberName,
                            userId: users.userId,
                            userFileTitle: users.fileName,
                            userFilePath: users.filePath,
                            status: users.status
                        }
                        ]))
                    })



                })
                .catch((err) => {
                    console.log(err);
                    console.log("detail데이터 불러오기 실패");
                })

        }


    }, [applyUsersPageNum, detailNoticeData.id, notice_id_params])


    //!SECTION detailPage



    //SECTION pagination
    const paginationNum = [];

    // pageTotalNum setting
    for (let i = 0; i < pageTotalNum; i++) {
        paginationNum.push(i + 1);
    }

    /**
        @description pagingNum 변경
        @function paginationOnclick
        @detail  pagination 클릭시 setPagingNum
        */
    const paginationOnclick = (e) => {

        setPagingNum(Number(e.target.innerText) - 1);
    }

    const userPaginationNum = [];

    for (let userIndex = 0; userIndex < userPaginationNum; userIndex++) {
        userPaginationNum.push(userIndex + 1);
    }

    const userPaginationOnClick = (e) => {
        setApplyUserPagingNum(Number(e.target.innerText) - 1);
    }



    //!SECTION pagination
    return (
        <>
            <MyPageContent
                pageList={pageList}
                paginationNum={paginationNum}
                noticeDetailOnclick={noticeDetailOnclick}
                detailNoticeData={detailNoticeData}
                paginationOnclick={paginationOnclick}

                applyUsers={applyUsers}
                userPaginationNum={userPaginationNum}
                userPaginationOnClick={userPaginationOnClick}

                isStatusModalVisible={isStatusModalVisible}
                handleStatusModal={handleStatusModal}
                downloadFileOnClick={downloadFileOnClick}
                statusBtnOnClick={statusBtnOnClick}
                statusChangeOnClick={statusChangeOnClick}
            ></MyPageContent>
        </>
    )
}

export default ContentContainer