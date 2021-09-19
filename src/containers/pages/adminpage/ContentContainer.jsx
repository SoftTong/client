import React, { useEffect, useState } from "react";
import MyPageContent from "../../../components/adminpage";
import get_noticedetail from "../../../service/api/get/get_noticedetail";
import get_managenotice from "../../../service/api/get/get_managenotice";
import { useHistory } from "react-router-dom";


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
                console.log(res);
                history.push("/adminpage/" + res.id + "/" + res.name.replace(/ /g, "-"));
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
            })
            .catch((err) => {
                console.log(err);
                console.log("detail데이터 불러오기 실패");
            });
    };


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