import React from "react";
import "../../css/bootstrap.min.css";
import NoticeList from "./NoticeList";
import "../../css/noticelist.css";
const NoticeListContent = ({
  pageList,
  paginationNum,
  noticeDetailOnclick,
  detailNoticeData,
  paginationOnclick,
  uploadOnclick,
  uploadfile,
  selectFile,
  searchWord,
  handleChangeWord,
  listback,
}) => {
  return (
    <>
      <div className="container">
        <div class="row align-items-stretch overlap">
          {/* <UserCard></UserCard> */}
          <NoticeList
            pageList={pageList}
            paginationNum={paginationNum}
            noticeDetailOnclick={noticeDetailOnclick}
            detailNoticeData={detailNoticeData}
            paginationOnclick={paginationOnclick}
            uploadOnclick={uploadOnclick}
            uploadfile={uploadfile}
            selectFile={selectFile}
            seachWord={searchWord}
            handleChangeWord={handleChangeWord}
            listback={listback}
          ></NoticeList>
        </div>
      </div>
    </>
  );
};

export default NoticeListContent;
