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
              ></NoticeListRouter>
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  };

export default SotongRouter;
