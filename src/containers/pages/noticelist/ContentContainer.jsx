import React, { useEffect, useState } from "react";
import NoticeListContent from "../../../components/noticelist";
import get_noticelist from "../../../service/api/get/get_noticelist";
import get_noticedetail from "../../../service/api/get/get_noticedetail";
import post_uploadFile from "../../../service/api/post/post_upload_file";
import post_submitForm from "../../../service/api/post/post_submit_form";
import { useHistory } from "react-router-dom";

const ContentContainer = () => {
  //NOTE 전체 페이지 갯수
  const [pageTotalNum, setPageTotalNum] = useState(0);

  //NOTE 선택한 페이지 번호
  const [pagingNum, setPagingNum] = useState(0);

  //NOTE 10개씩 세팅되는 리스트
  const [pageList, setPageList] = useState([]);

  //검색 단어
  const [searchWord, setSearchWord] = useState("");

  const getnoticeList = (pickPageNum, searchWord) => {
    get_noticelist(pickPageNum, searchWord)
      .then((res) => {
        console.log(res);
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

  useEffect(() => {
    getnoticeList(0, null);
  }, []);

  useEffect(() => {
    getnoticeList(pagingNum, searchWord);
  }, [pagingNum, searchWord]);

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

  //SECTION notice detail

  //NOTE detail notice data

  const [detailNoticeData, setDetailNoticeData] = useState({
    id: "",
    title: "",
  });
  const history = useHistory();

  const noticeDetailOnclick = (id) => {
    console.log(id);
    setDetailNoticeData((state) => ({ ...state, id: id }));
    get_noticedetail(id)
      .then((res) => {
        console.log(res);
        history.push(
          "/notice/" +
            res.response.notice.id +
            "/" +
            res.response.notice.name.replace(/ /g, "-")
        );
        setDetailNoticeData((state) => ({
          ...state,
          title: res.response.notice.name,
          tag1: res.response.notice.tag1,
          tag2: res.response.notice.tag2,
          tag3: res.response.notice.tag3,
          startDay: res.response.notice.startDay,
          destDay: res.response.notice.destDay,
          swurl: res.response.notice.swurl,
          isForm: res.response.notice.isForm,
          description: res.response.notice.description,
          questionId: res.response.notice.questionId,
        }));
      })
      .catch((err) => {
        console.log(err);
        console.log("detail데이터 불러오기 실패");
      });
  };

  ///!SECTION notice detail

  const [uploadfile, setUploadfile] = useState(null);

  const selectFile = (e) => {
    const selectfiles = e.currentTarget.files;
    console.log("====파일확인====");
    console.log(selectfiles[0]);

    const formData = new FormData();
    formData.append("file", selectfiles[0]);
    formData.append("noticeId", detailNoticeData.id);
    console.log(formData.get("file"));
    console.log(formData.get("noticeId"));
    console.log(formData);
    setUploadfile(formData);
  };

  /**
    @description   첨부파일 버튼 OnClick 
    @function uploadButtonOnclick
    @btnValue 제출하기
    @detail  requestData 형식으로 맞추고 post  */
  const uploadOnclick = () => {
    post_uploadFile(uploadfile)
      .then((res) => {
        console.log("첨부파일 업로드 성공");
        console.log(res + ": 첨부파일 업로드 ");

        history.push("../../mypage");
      })
      .catch((err) => console.log(err + ": 에러"));
  };

  /**
    @description   신청서 제출 버튼 OnClick 
    @function uploadButtonOnclick
    @btnValue 제출하기
    @detail  requestData 형식으로 맞추고 post  */
  // const [content, setContent] = useState();
  const submitFormOnclick = () => {
    console.log(answerArr);
    const newanswerArr = [];
    for (let i = 0; i < Object.keys(answerArr).length; i++) {
      newanswerArr[i] = answerArr[i];
    }
    console.log(newanswerArr);
    var answerStr = newanswerArr.join("$$$");
    console.log(answerStr);

    post_submitForm(
      detailNoticeData.questionId,
      JSON.stringify({
        content: answerStr,
      })
    )
      .then((res) => {
        console.log("신청서 제출 성공");
        console.log(res);
        history.push("../../mypage");
      })
      .catch((err) => console.log(err));
  };

  //검색기능
  const handleChangeWord = (e) => {
    setSearchWord(e.target.value);
    setPagingNum(0);
    console.log(searchWord);
  };

  //배열 넣기

  const [answer, setAnswer] = useState("");
  const [answerArr, setAnswerArr] = useState([]);

  const submitForm = (e, index) => {
    console.log(e.target.value);
    setAnswer(e.target.value);
    console.log(answer);
    setAnswerArr({ ...answerArr, [index]: answer });
    console.log(answerArr);
  };

  const listback = () => {
    //목록이동
    history.push("/notice/");
  };

  const [islike, setIslike] = useState(false);

  const noticeListLikeHandler = () => {
    alert("관심목록에 추가하였습니다.");
    setIslike(!islike);
  };

  return (
    <>
      <NoticeListContent
        pageList={pageList}
        paginationNum={paginationNum}
        noticeDetailOnclick={noticeDetailOnclick}
        paginationOnclick={paginationOnclick}
        detailNoticeData={detailNoticeData}
        uploadOnclick={uploadOnclick}
        submitFormOnclick={submitFormOnclick}
        uploadfile={uploadfile}
        selectFile={selectFile}
        searchWord={searchWord}
        handleChangeWord={handleChangeWord}
        listback={listback}
        noticeListLikeHandler={noticeListLikeHandler}
        islike={islike}
        submitForm={submitForm}
        answerArr={answerArr}
      ></NoticeListContent>
    </>
  );
};

export default ContentContainer;
