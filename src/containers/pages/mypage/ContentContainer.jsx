import React, { useEffect, useState } from "react"
import MyPageContent from "../../../components/mypage"
import get_noticedetail from "../../../service/api/get/get_noticedetail";
import get_managenotice from "../../../service/api/get/get_managenotice";


const ContentContainer = ({ role, name }) => {
    //NOTE 전체 페이지 갯수
    const [pageTotalNum, setPageTotalNum] = useState(0);

    //NOTE 선택한 페이지 번호
    const [pagingNum, setPagingNum] = useState(0);

    //NOTE 10개씩 세팅되는 리스트
    const [pageList, setPageList] = useState([]);

    //NOTE manage page open
    const [isDetailVisible, setIsDetailVisible] = useState(false);

    const detailHandling = {
        show: () => setIsDetailVisible(true),
        close: () => setIsDetailVisible(false),
    };


    const getnoticeList = (pickPageNum) => {
        get_managenotice(pickPageNum)
            .then((res) => {
                console.log(res);
                console.log(res.content);
                console.log(res.totalPages);
                setPageTotalNum(res.totalPages);
                setPageList([]);
                res.content.forEach((lists) => {
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

    useEffect(() => {
        setIsDetailVisible(false);
        getnoticeList(0);
    }, []);

    useEffect(() => {
        getnoticeList(pagingNum);
    }, [pagingNum]);


    //SECTION pagination
    const paginationNum = [];

    // pageTotalNum
    for (let i = 0; i < pageTotalNum; i++) {
        paginationNum.push(i + 1);
    }

    const paginationOnclick = (e) => {
        console.log(Number(e.target.innerText) - 1);
        setPagingNum(Number(e.target.innerText) - 1);
    };
    //!SECTION pagination

    //NOTE detail notice data
    const [detailNoticeData, setDetailNoticeData] = useState({
        id: "",
    });
    const noticeDetailOnclick = (id) => {
        console.log(id);
        setDetailNoticeData((state) => ({ ...state, id: id }));
        get_noticedetail(id)
            .then((res) => {
                console.log(res);
                setDetailNoticeData((state) => ({
                    ...state,
                    title: res.name,
                    tag1: res.tag1,
                    tag2: res.tag2,
                    tag3: res.tag3,
                    startDay: res.startDay,
                    destDay: res.destDay,
                    swurl: res.swurl,
                }));
                detailHandling.show();
            })
            .catch((err) => {
                console.log(err);
                console.log("detail데이터 불러오기 실패");
            });
    };

    return (
        <>
            <MyPageContent
                //props로 넘겨주기
                role={role}
                name={name}
                pageList={pageList}
                isDetailVisible={isDetailVisible}
                detailHandling={detailHandling}
                paginationNum={paginationNum}
                noticeDetailOnclick={noticeDetailOnclick}
                detailNoticeData={detailNoticeData}
                paginationOnclick={paginationOnclick}
            ></MyPageContent>
        </>
    )

}


export default ContentContainer


