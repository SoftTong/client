import React from "react";
import "../../css/bootstrap.min.css";
import NoticeList from "./NoticeList";
import UserCard from "../../containers/redux/components/usercard";
import "../../css/noticelist.css";
const NoticeListContent = ({
  pageList,
  isDetailVisible,
  detailHandling,
  paginationNum,
  noticeDetailOnclick,
  detailNoticeData,
}) => {
  return (
    <>
      <div className="container">
        <div class="row align-items-stretch overlap">
          {/* <UserCard></UserCard> */}
          <NoticeList
            pageList={pageList}
            isDetailVisible={isDetailVisible}
            detailHandling={detailHandling}
            paginationNum={paginationNum}
<<<<<<< HEAD
            noticeDetailOnclick={noticeDetailOnclick}
            detailNoticeData={detailNoticeData}

=======
>>>>>>> 862c2b5c67f2fb1110e307f73da772ebf874cd83
          ></NoticeList>
        </div>
      </div>
    </>
  );
};

export default NoticeListContent;
