import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreateNoticeRouter from "./CreateNoticeRouter";
import HomeRouter from "./HomeRouter";
import ProfileRouter from "./ProfileRouter";
import NoticeListRouter from "./NoticeListRouter";

//TODO userInfo 추가 ( Redux 구축)
//TODO 여기서 redux 값다 받아서 props 로 contentContainer 로 넘겨주자
const SotongRouter = () =>
  //예상 userReducer
  // role (역할)
  // username ( 사용자이름)
  // type ( 튜터 ? )
  {
    const userInfo = {
      //TODO role 하드코딩한거 지우기
      role: "ADMIN",
      //받아온거 넣기
    };
    const noticeData = {
      content: [
        {
          id: 1,
          name: "제목1",
          swurl:
            "https://sw7up.cbnu.ac.kr/community/notice/6107829bd2329b2b74c84c01",
          tag1: "1",
          tag2: "2",
          tag3: "3",
          uploadDay: "2021-08-07T08:57:27.571+00:00",
          startDay: "2021-08-12",
          destDay: "2021-08-31",
          viewCount: 0,
          memberDao: null,
        },
      ],
      pageable: {
        sort: {
          sorted: true,
          unsorted: false,
          empty: false,
        },
        pageNumber: 0,
        pageSize: 10,
        offset: 0,
        paged: true,
        unpaged: false,
      },
      last: true,
      totalPages: 1,
      totalElements: 1,
      first: true,
      size: 10,
      number: 0,
      sort: {
        sorted: true,
        unsorted: false,
        empty: false,
      },
      numberOfElements: 1,
      empty: false,
    };

    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <HomeRouter
                security={["ADMIN", "GUEST", "USER"]}
                userInfo={userInfo}
              ></HomeRouter>
            </Route>
            <Route path="/profile">
              <ProfileRouter
                security={["ADMIN", "GUEST", "USER"]}
                userInfo={userInfo}
              ></ProfileRouter>
            </Route>
            <Route path="/createnotice">
              <CreateNoticeRouter
                security={["ADMIN", "GUEST", "USER"]}
                userInfo={userInfo}
              ></CreateNoticeRouter>
            </Route>
            <Route path="/notice">
              <NoticeListRouter
                security={["ADMIN", "GUEST", "USER"]}
                userInfo={userInfo}
                noticeData={noticeData}
              ></NoticeListRouter>
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  };

export default SotongRouter;
