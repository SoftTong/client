import React, { useEffect, useState } from "react";
import NoticeListContent from "../../../components/noticelist";
import get_noticelist from "../../../service/api/get/get_noticelist"
const ContentContainer = () => {
  //제목 작성자 작성일 테그
  const [pageList, setPageList] = useState([])


  const getnoticeList0 = () => {
    get_noticelist(0)
      .then((res) => {
        console.log(res)
        console.log(res.content)
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
    setPageList([])
    getnoticeList0()
  }, [])

  console.log("getNoticeList")

  console.log('pageList')
  console.log(pageList)
  return (
    <>
      <NoticeListContent pageList={pageList}></NoticeListContent>
    </>
  );
};

export default ContentContainer;
