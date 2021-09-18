//NOTE MyPage CONTENT
import React from "react";
import styled from "styled-components";
import UserCard from "../../containers/redux/components/usercard";
import AdminMyPage from "./AdminMyPage";
import UserMyPage from "./UserMyPage";

const MyPageWrapper = styled.div`
  width: 100%;
  height: calc(100% - 78px);
  display: flex;
  justify-content: space-between;
  animation: 0.5s ease 0s 1 normal forwards running Tags;
  @keyframes Tags {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

const MyPageContent = ({
  role,
  name,
  filePath,
  pageList,
  applyPageList,
  isDetailVisible,
  applyIsDetailVisible,
  applydetailHandling,
  detailHandling,
  paginationNum,
  applyPageinationNum,
  noticeDetailOnclick,
  detailNoticeData,
  applyDetailOnclick,
  applyDetailData,
  paginationOnclick,
  fileDownload,
}) => {
  console.log(applyPageinationNum);
  console.log(role);
  return (
    <>
      <MyPageWrapper>
        <UserCard></UserCard>
        <div className="col-lg-9">
          <div className="container">
            <div class="row align-items-stretch overlap">
              <UserMyPage
                filePath={filePath}
                applyPageList={applyPageList}
                applyIsDetailVisible={applyIsDetailVisible}
                applydetailHandling={applydetailHandling}
                applyPageinationNum={applyPageinationNum}
                applyDetailOnclick={applyDetailOnclick}
                applyDetailData={applyDetailData}
                paginationOnclick={paginationOnclick}
                fileDownload={fileDownload}
              ></UserMyPage>
            </div>
          </div>
        </div>
      </MyPageWrapper>
    </>
  );
};

export default MyPageContent;
