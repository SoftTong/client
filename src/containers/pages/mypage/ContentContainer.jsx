import React, { useEffect, useState } from "react";
import MyPageContent from "../../../components/mypage";
import get_noticedetail from "../../../service/api/get/get_noticedetail";
import get_managenotice from "../../../service/api/get/get_managenotice";
import get_applylist from "../../../service/api/get/get_applylist";
import get_applydetail from "../../../service/api/get/get_applydetail";
import get_filedownload from "../../../service/api/get/get_filedownload";
import { useParams, useHistory } from "react-router-dom";

const ContentContainer = ({ role, name }) => {
  //NOTE 전체 페이지 갯수
  const [pageTotalNum, setPageTotalNum] = useState(0);

  //NOTE 선택한 페이지 번호
  const [pagingNum, setPagingNum] = useState(0);

  //NOTE 10개씩 세팅되는 리스트
  const [pageList, setPageList] = useState([]);

  //NOTE manage page open
  const [isDetailVisible, setIsDetailVisible] = useState(false);

  //SECTION USER 입장
  //NOTE 전체 페이지 갯수
  const [applyPageTotalNum, setApplyPageTotalNum] = useState(0);

  //NOTE 선택한 페이지 번호
  const [applyPagingNum, setApplyPagingNum] = useState(0);

  //NOTE 신청목록에서 10개씩 세팅되는 리스트
  const [applyPageList, setApplyPageList] = useState([]);
  //NOTE apply page open
  const [applyIsDetailVisible, setApplyIsDetailVisible] = useState(false);

  const [filePath, setfilePath] = useState("");
  const detailHandling = {
    show: () => setIsDetailVisible(true),
    close: () => setIsDetailVisible(false),
  };
  const applydetailHandling = {
    show: () => setApplyIsDetailVisible(true),
    close: () => setApplyIsDetailVisible(false),
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
    setApplyIsDetailVisible(false);
    // FIXME USER 구현시 밑에꺼 주석 <-> 반대느반대
    role === "USER" //USER 구현
      ? // (role !== "USER") ? //ADMIN 구현
        applyList(0)
      : getnoticeList(0);
  }, [role]);

  useEffect(() => {
    role === "USER" ? applyList(applyPagingNum) : getnoticeList(pagingNum);
  }, [role === "USER" ? applyPagingNum : pagingNum, role]);

  //SECTION pagination
  const paginationNum = [];
  const applyPageinationNum = [];

  // pageTotalNum
  if (role === "USER") {
    for (let i = 0; i < applyPageTotalNum; i++) {
      applyPageinationNum.push(i + 1);
    }
  } else {
    for (let i = 0; i < pageTotalNum; i++) {
      paginationNum.push(i + 1);
    }
  }

  const paginationOnclick = (e) => {
    console.log(Number(e.target.innerText) - 1);
    if (role === "USER") {
      setApplyPagingNum(Number(e.target.innerText) - 1);
    } else {
      setPagingNum(Number(e.target.innerText) - 1);
    }
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

  //SECTION user 입장에서 신청한 목록

  const applyList = (pickPageNum) => {
    get_applylist(pickPageNum)
      .then((res) => {
        console.log("===");
        console.log(res);
        console.log(res.response.content);
        console.log(res.response.totalPages);
        setApplyPageTotalNum(res.response.totalPages);
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

  const [applyDetailData, setApplyDetailData] = useState({
    id: "",
  });
  const history = useHistory();
  const applyDetailOnclick = (id, dtype) => {
    console.log("===");
    console.log(id);

    setApplyDetailData((state) => ({ ...state, id: id }));
    get_applydetail(id, dtype)
      .then((res) => {
        console.log(res);

        setfilePath(res.response.filePath);

        history.push("/mypage/" + res.response.applyId);
        setApplyDetailData((state) => ({
          ...state,
          id: res.response.applyId,
          title: res.response.noticeTitle,
          status: res.response.status,
          uploadDay: res.response.uploadDay.substring(0, 10),
          dtype: res.response.dtype,
          noticeUrl: res.response.noticeUrl,
        }));
        applydetailHandling.show();
      })
      .catch((err) => {
        console.log(err);
        console.log("apply detail데이터 불러오기 실패");
      });
  };

  //본인이 신청한 파일 다운로드 받기
  const fileDownload = (filePath) => {
    console.log("여기");
    console.log(filePath);

    // get_filedownload(filePath)
    //   .then((res) => {
    //     setApplyDetailData((state) => ({
    //       ...state,
    //       id: res.applyId,
    //       title: res.noticeTitle,
    //       status: res.status,
    //       uploadDay: res.uploadDay.substring(0, 10),
    //       dtype: res.dtype,
    //     }));
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     console.log("파일 다운로드 실패");
    //   });
  };

  return (
    <>
      <MyPageContent
        //props로 넘겨주기
        role={role}
        name={name}
        filePath={filePath}
        pageList={pageList}
        applyPageList={applyPageList}
        isDetailVisible={isDetailVisible}
        applyIsDetailVisible={applyIsDetailVisible}
        applydetailHandling={applydetailHandling}
        detailHandling={detailHandling}
        paginationNum={paginationNum}
        applyPageinationNum={applyPageinationNum}
        noticeDetailOnclick={noticeDetailOnclick}
        detailNoticeData={detailNoticeData}
        applyDetailOnclick={applyDetailOnclick}
        applyDetailData={applyDetailData}
        paginationOnclick={paginationOnclick}
        fileDownload={fileDownload}
      ></MyPageContent>
    </>
  );
};

export default ContentContainer;
