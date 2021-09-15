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
  pageList,
  applyPageList,
  isDetailVisible,
  detailHandling,
  paginationNum,
  applyPageinationNum,
  noticeDetailOnclick,
  detailNoticeData,
  applyDetailOnclick,
  applyDetailData,
  paginationOnclick,
}) => {
  console.log(applyPageinationNum);
  console.log(role);

  return (
    <>
      <MyPageWrapper>
        <UserCard></UserCard>
        <div className="col-lg-9">
          {/* {role !== "USER" ? ( */}
          {role === "USER" ? ( //USER 구현
            // FIXME USER 구현시 밑에꺼 주석 <-> 반대느반대

            <div className="container">
              <div class="row align-items-stretch overlap">
                <UserMyPage
                  applyPageList={applyPageList}
                  isDetailVisible={isDetailVisible}
                  detailHandling={detailHandling}
                  applyPageinationNum={applyPageinationNum}
                  applyDetailOnclick={applyDetailOnclick}
                  applyDetailData={applyDetailData}
                  paginationOnclick={paginationOnclick}
                ></UserMyPage>
              </div>
            </div>
          ) : (
            <AdminMyPage
              pageList={pageList}
              isDetailVisible={isDetailVisible}
              detailHandling={detailHandling}
              paginationNum={paginationNum}
              noticeDetailOnclick={noticeDetailOnclick}
              detailNoticeData={detailNoticeData}
              paginationOnclick={paginationOnclick}
            ></AdminMyPage>
          )}
        </div>
      </MyPageWrapper>
    </>
  );
};

export default MyPageContent;
