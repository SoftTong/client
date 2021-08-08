import React from "react";
import "../../css/profile.css";
import "../../css/bootstrap.min.css";
import NoticeList from "./NoticeList";
import UserCard from "../../containers/redux/components/usercard";

const NoticeListContent = () => {
  return (
    <>
      <div className="container">
        <div class="row align-items-stretch overlap">
          <UserCard></UserCard>
          <NoticeList></NoticeList>
        </div>
      </div>
    </>
  );
};

export default NoticeListContent;
