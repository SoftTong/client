import React from "react";
import "../../css/bootstrap.min.css";
import NoticeList from "./NoticeList";
import "../../css/noticelist.css";
const NoticeListContent = ({
  pageList,
  isDetailVisible,
  detailHandling,
  paginationNum,
  noticeDetailOnclick,
  detailNoticeData,
  paginationOnclick,
  uploadOnclick,
  uploadfile,
  selectFile,
  searchWord,
  handleChangeWord,
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
            noticeDetailOnclick={noticeDetailOnclick}
            detailNoticeData={detailNoticeData}
            paginationOnclick={paginationOnclick}
            uploadOnclick={uploadOnclick}
            uploadfile={uploadfile}
            selectFile={selectFile}
            seachWord={searchWord}
            handleChangeWord={handleChangeWord}
          ></NoticeList>
        </div>
      </div>
    </>
  );
};

export default NoticeListContent;
