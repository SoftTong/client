import React, { useState, useEffect } from "react";
import HomeContent from "../../../components/home";
import get_noticelist from "../../../service/api/get/get_noticelist";
import get_applylist from "../../../service/api/get/get_applylist";
import get_userInfo from "../../../service/api/get/get_userInfo";
import _ from "../../../config/env";

const ContentContainer = ({}) => {
  //NOTE 10개씩 세팅되는 리스트
  const [pageList, setPageList] = useState([]);
  //NOTE 선택한 페이지 번호
  const [pagingNum, setPagingNum] = useState(0);
  const [searchWord, setSearchWord] = useState("");
  const [applyPageList, setApplyPageList] = useState([]);
  const [applyPagingNum, setApplyPagingNum] = useState(0);
  const [userInfo, setUserInfo] = useState([]);

  const getuserInfo = () => {
    get_userInfo()
      .then((res) => {
        console.log(res);

        setUserInfo({
          id: res.response.userId,
          email: res.response.email,
          phoneNumber: res.response.phoneNumber,
          name: res.response.name,
          department: res.response.department,
        });
      })
      .catch((err) => console.log(err));
  };

  const getnoticeList = (pickPageNum, searchWord) => {
    get_noticelist(pickPageNum, searchWord)
      .then((res) => {
        console.log(res);
        console.log(res.response.content);
        console.log(res.response.totalPages);

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

  const applyList = (pickPageNum) => {
    get_applylist(pickPageNum)
      .then((res) => {
        console.log("===");
        console.log(res);
        console.log(res.response.content);
        console.log(res.response.totalPages);
        setApplyPageList([]);

        res.response.content.forEach((lists) => {
          setApplyPageList((state) => [
            ...state,
            {
              id: lists.applyId,
              title: lists.noticeTitle,
              status: lists.status,
              uploadDay: lists.uploadDay.substring(0, 10),
              dtype: lists.dtype,
            },
          ]);
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getuserInfo();
    getnoticeList(pagingNum, searchWord);
    applyList(applyPagingNum);
  }, []);

  return (
    <>
      <HomeContent
        pageList={pageList}
        applyPageList={applyPageList}
        userInfo={userInfo}
      ></HomeContent>
    </>
  );
};

export default ContentContainer;

//   //HOME에서 관리할 모든 state / 함수
//     const get_noticelist = (noticeId) => {
//         console.log(localStorage.getItem("SoTong-token"))
//         return fetch(_.SERVER_URL + "/notice/" + Number(noticeId), {
//             method: 'GET',
//             headers: {
//                 'Authorization': "Bearer " + localStorage.getItem("SoTong-token")
//             },
//         }).then((res) => {
//             if (res.status === 500) throw Promise.resolve({ errorCode: 500, errorName: "Server error" })
//             if (!res.ok) throw res.json()
//             console.log(res)
//             return res.json()
//         })
//             .catch(async (error) => {
//                 let err = await error.then()
//                 console.log(err)
//                 console.log("Error from  get_managenoticelist\n" + err.message + "\n success : " + err.success)
//                 throw err;
//             })
//         }

// }

// get_noticelist(0)
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
