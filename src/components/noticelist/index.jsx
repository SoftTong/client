import React from "react";
import "../../css/bootstrap.min.css";
import NoticeList from "./NoticeList";
import UserCard from "../../containers/redux/components/usercard";
import "../../css/noticelist.css";
const NoticeListContent = ({ pageList }) => {

  return (
    <>
      <div className="container">
        <div class="row align-items-stretch overlap">
          <UserCard></UserCard>
          <NoticeList pageList={pageList}></NoticeList>
        </div>
      </div>
    </>
  );
};

export default NoticeListContent;
