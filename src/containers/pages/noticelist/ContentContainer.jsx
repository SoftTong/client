import React, { useEffect, useState } from "react";
import NoticeListContent from "../../../components/noticelist";
import get_noticelist from "../../../service/api/get/get_noticelist"
import get_noticedetail from "../../../service/api/get/get_noticedetail";
const ContentContainer = () => {

  //NOTE 전체 페이지 갯수
  const [pageTotalNum, setPageTotalNum] = useState(0)

  //NOTE 선택한 페이지 번호   
  const [pagingNum, setPagingNum] = useState(0)

  //NOTE 10개씩 세팅되는 리스트
  const [pageList, setPageList] = useState([])

  //NOTE detail page open 
  const [isDetailVisible, setIsDetailVisible] = useState(false)

  const detailHandling = {
    show: () => setIsDetailVisible(true),
    close: () => setIsDetailVisible(false)
  }



  const getnoticeList = (pickPageNum) => {
    get_noticelist(pickPageNum)
      .then((res) => {
        console.log(res)
        console.log(res.content)
        console.log(res.totalPages)
        setPageTotalNum(res.totalPages)
        setPageList([])
        res.content.forEach((lists) => {
          setPageList((state) => [...state, {
            id: lists.id,
            title: lists.name,
            tag1: lists.tag1,
            tag2: lists.tag2,
            tag3: lists.tag3,
            adminName: lists.authorName,
            uploadDay: lists.uploadDay.substring(0, 10)
          }])
        })
      })
      .catch((err) => console.log(err))
  }
  //what is this component?
  //왜이래 야 다시 쳐봐

  useEffect(() => {
    console.log("mount")
    setIsDetailVisible(false)
    getnoticeList(0)
  }, [])

  useEffect(() => {
    getnoticeList(pagingNum)
  }, [pagingNum])


  //SECTION pagination 
  const paginationNum = []

  for (let i = 0; i < pageTotalNum; i++) {
    paginationNum.push(i + 1)
  }
  //!SECTION pagination 



  //SECTION notice detail 

  //NOTE detail notice data
  const [detailNoticeData, setDetailNoticeData] = useState({
    id: "",
    title: "",
    tag1: "",
    tag2: "",
    tag3: "",
    startDay: "",
    destDay: "",

  })







  const noticeDetailOnclick = (id) => {
    console.log(id)
    setDetailNoticeData((state) => ({ ...state, id: id }))
    get_noticedetail(id)
      .then((res) => {
        console.log(res)
        detailHandling.show()
      })
      .catch((err) => {
        console.log(err)

        //FIXME 통신 성공시 지우기
        setDetailNoticeData((state) => ({
          ...state,
          title: "SW중심대학사업단 2021학년도 SW융합전공 홍보 동영상 공유",
          tag1: "SW융합교육센터",
          tag2: "SW융합전공",
          tag3: "SW융합전공 홍보",
          startDay: "2021-08-10",
          destDay: "2021-08-16",
        }))
        detailHandling.show()


      })
  }

  ///!SECTION notice detail 
  console.log(detailNoticeData)

  return (
    <>
      <NoticeListContent
        pageList={pageList}
        isDetailVisible={isDetailVisible}
        detailHandling={detailHandling}
        paginationNum={paginationNum}
        noticeDetailOnclick={noticeDetailOnclick}

        detailNoticeData={detailNoticeData}

      ></NoticeListContent>
    </>
  );
};

export default ContentContainer;
