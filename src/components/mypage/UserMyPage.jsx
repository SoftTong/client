//NOTE MyPage USER CONTENT

import React from "react";
// import styled from "styled-components";
import ManageTable from "./ManageTable";

const UserMyPage = (
  applypageList,
  isDetailVisible,
  detailHandling,
  paginationNum,
  noticeDetailOnclick,
  detailNoticeData,
  paginationOnclick
) => {
  return (
    <>
      <div className="col-lg-12">
        <div className="section-title">
          <p>프로그램 신청 목록</p>
        </div>
        <div className="box h-100">
          <div className="d-flex align-items-center">
            <div className="section">
              <ManageTable
                applypageList={applypageList}
                isDetailVisible={isDetailVisible}
                detailHandling={detailHandling}
                paginationNum={paginationNum}
                noticeDetailOnclick={noticeDetailOnclick}
                detailNoticeData={detailNoticeData}
                paginationOnclick={paginationOnclick}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserMyPage;
