import React, { useEffect, useState } from "react";
import NoticeListContent from "../../../components/noticelist";
import get_noticelist from "../../../service/api/get/get_noticelist"
const ContentContainer = () => {

  //NOTE 전체 페이지 갯수
  const [pageTotalNum, setPageTotalNum] = useState(0)

  //NOTE 선택한 페이지 번호   
  const [pagingNum, setPagingNum] = useState(0)

  //NOTE 10개씩 세팅되는 리스트
  const [pageList, setPageList] = useState([])

  //NOTE 상세 페이지 보여줄 notice
  const [detailNoticeId, setDetailNoticeId] = useState({})

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

  useEffect(() => {
    getnoticeList(0)
  }, [])

  useEffect(() => {
    getnoticeList(pagingNum)
  }, [pagingNum])

  console.log(`pageTotalNum : ${pageTotalNum}`)
  console.log('pageList')
  console.log(pageList)

  const paginationNum = []

  for (let i = 0; i < pageTotalNum; i++) {
    paginationNum.push(i + 1)
  }

  return (
    <>
      <NoticeListContent
        pageList={pageList}
        isDetailVisible={isDetailVisible}
        detailHandling={detailHandling}
        paginationNum={paginationNum}
      ></NoticeListContent>
    </>
  );
};

export default ContentContainer;
