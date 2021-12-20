import React, { useEffect, useState } from "react";
import MyPageContent from "../../../components/adminpage";
import get_noticedetail from "../../../service/api/get/get_noticedetail";
import get_managenotice from "../../../service/api/get/get_managenotice";
import { useHistory, useParams } from "react-router-dom";
import get_apply_notice_user from "../../../service/api/get/get_applynoticeuser";


const ContentContainer = ({ role, name }) => {
    //NOTE 전체 페이지 갯수
    const [pageTotalNum, setPageTotalNum] = useState(0);

    //NOTE 선택한 페이지 번호
    const [pagingNum, setPagingNum] = useState(0);

    //NOTE 10개씩 세팅되는 리스트
    const [pageList, setPageList] = useState([]);

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

    const [applyUsersPageNum, setApplyUsersPageNum] = useState(1)
    const [applyUsers, setApplyUsers] = useState([])

    let notice_id_params = useParams();

    /**
              @description 관리자가 작성한 게시물에 지원한 지원서 정보들
              @function getApplyGetUsers
              */

    useEffect(() => {
        console.log("🤯🤯params")
        console.log(notice_id_params)
        console.log(notice_id_params.id)

        console.log("🍰🍰");

        if (notice_id_params.id) {
            get_apply_notice_user(notice_id_params.id, applyUsersPageNum)
                .then((res) => {
                    console.log("😶‍🌫️😶‍🌫️")
                    console.log(res.response);




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


    //!SECTION pagination
    return (
        <>
            <MyPageContent
                pageList={pageList}
                paginationNum={paginationNum}
                noticeDetailOnclick={noticeDetailOnclick}
                detailNoticeData={detailNoticeData}
                paginationOnclick={paginationOnclick}
            ></MyPageContent>
        </>
    )
}

export default ContentContainer