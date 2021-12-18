import React, { useState } from "react";
import CreateNoticeContent from "../../../components/createnotice";
import postCreateFormNotice from "../../../service/api/post/post_create_form_notice";
import postCreateFileNotice from "../../../service/api/post/post_create_file_notice";
import { useHistory } from "react-router-dom";
import { notification } from "antd";

const ContentContainer = () => {
  //createnotice에서 관리할 모든 state / 함수

  /**
   * @description notice 만들떄 필요한 data */
  const [noticeData, setNoticeData] = useState({
    title: "",
    swurl: "",
    tags: [],
    startDate: null,
    endDate: null,
  });

  console.log(noticeData);

  const [newTag, setNewTag] = useState("");

  /**
@description tag 다루는 함수
@function tagCreate
@function tagAdd 
@function tagDelete */
  const handleTags = {
    changetag: (e) => {
      setNewTag(e.target.value);
    },
    add: (e) => {
      if (e.key === "Enter") {
        console.log(newTag);
        const pushTags = [...noticeData.tags, newTag];
        setNoticeData((state) => ({ ...state, tags: pushTags }));
        setNewTag("");
      }
    },
    delete: (e) => {
      console.log(e.target.innerText);
      console.log(noticeData.tags);
      const deleteTag = noticeData.tags.filter(
        (tag) => tag !== e.target.innerText
      );
      console.log(deleteTag);
      setNoticeData((state) => ({ ...state, tags: deleteTag }));
    },
  };

  /**
   * @description noticeCreate  입력  FUNCTION  */
  let createNoticeFunction = {
    title: (e) => {
      const title = e.target.value;
      return setNoticeData((state) => ({ ...state, title: title }));
    },
    swurl: (e) => {
      const swurl = e.target.value;
      return setNoticeData((state) => ({ ...state, swurl: swurl }));
    },
    tag: (e) => {
      const tags = e.target.value;
      return setNoticeData((state) => ({ ...state, tags: tags }));
    },
    startDate: (e) => {
      const startDate = e.target.value;
      return setNoticeData((state) => ({ ...state, startDate: startDate }));
    },
    endDate: (e) => {
      const endDate = e.target.value;
      return setNoticeData((state) => ({ ...state, endDate: endDate }));
    },
  };

  /**
    @description   제출하기 버튼 OnClick 
    @function buttonOnclick
    @btnValue 제출하기
    @detail  requestData 형식으로 맞추고 post  */
  const history = useHistory();


  //File
  const fileSubmitOnclick = () => {
    postCreateFileNotice(
      JSON.stringify({
        name: noticeData.title,
        swurl: noticeData.swurl,
        tag1: noticeData.tags[0] || null,
        tag2: noticeData.tags[1] || null,
        tag3: noticeData.tags[2] || null,
        startDay: noticeData.startDate,
        destDay: noticeData.endDate,
      })
    )
      .then((res) => {
        console.log("게시글 올리기 성공");
        console.log(res);
        history.push("../notice");
      })
      .catch((err) => console.log(err));
  };


  // SECTION FORM
  const [isFormBtnClick, setIsFormBtnClick] = useState(false)
  const [isAddQuestion, setIsAddQuestion] = useState(false)

  const [questionsArr, setQuestionsArr] = useState([])

  const [questionValue, setQuestionValue] = useState('')


  const handleAddQuestion = {

    FormBtnOnClick: () => {
      isFormBtnClick ? setIsFormBtnClick(true) : setIsFormBtnClick(true)
    },

    AddQuestionFormDoor: () => {
      isAddQuestion ? setIsAddQuestion(false) : setIsAddQuestion(true)
    },
    AddQuestionSubmit: (value) => {
      setQuestionsArr((state) => ([...state, value]))
    }
  }

  const setQuestionPost = () => {
    if (!questionsArr) return notification['error']({
      message: `질문을 입력해주세요💦`,
      description: `form형식을 제출할떈 질문이 하나이상 필요합니다.`
    })
    return questionsArr.join('$$$')
  }

  //NOTE Form제출
  const formSubmitOnclick = () => {
    console.log(setQuestionPost)
    postCreateFormNotice(
      JSON.stringify({
        name: noticeData.title,
        swurl: noticeData.swurl,
        tag1: noticeData.tags[0] || null,
        tag2: noticeData.tags[1] || null,
        tag3: noticeData.tags[2] || null,
        startDay: noticeData.startDate,
        destDay: noticeData.endDate,
        description: setQuestionPost(),
      })
    )
      .then((res) => {
        console.log("게시글 올리기 성공");
        console.log(res);
        history.push("../notice");
      })
      .catch((err) => console.log(err));
  };

  // !SECTION

  console.log("질문 arr드간거 확인하기")
  console.log(questionsArr)


  console.log()

  return (
    <>
      <CreateNoticeContent
        //props로 넘겨주기
        noticeData={noticeData}
        handleTags={handleTags}
        newTag={newTag}
        createNoticeFunction={createNoticeFunction}
        formSubmitOnclick={formSubmitOnclick}
        fileSubmitOnclick={fileSubmitOnclick}

        isAddQuestion={isAddQuestion}
        isFormBtnClick={isFormBtnClick}
        handleAddQuestion={handleAddQuestion}
        questionsArr={questionsArr}
      ></CreateNoticeContent>
    </>
  );
};

export default ContentContainer;
