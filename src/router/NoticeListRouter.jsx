import React from "react";
import { useHistory } from "react-router";
import NoticeList from "../pages/NoticeList";

const NoticeListRouter = ({ security, userInfo }) => {
  const history = useHistory();
  if (security.includes(userInfo.role)) {
    return <NoticeList />;
  }

  history.push("/noticelist");
  return null;
};

export default NoticeListRouter;
