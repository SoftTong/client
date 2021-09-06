//NOTE MyPage CONTENT
import React from "react";
import styled from "styled-components";
import UserCard from "../../containers/redux/components/usercard";
import AdminMyPage from "./AdminMyPage"
import UserMyPage from "./UserMyPage"

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
`


const MyPageContent = ({
    role, name,
    pageList,
    isDetailVisible,
    detailHandling,
    paginationNum,
    noticeDetailOnclick,
    detailNoticeData,
    paginationOnclick,
}) => {

    console.log(role)

    return (
        <>
            <MyPageWrapper>
                <UserCard ></UserCard>
                <div className="col-lg-9">
                    {

                        (role === "USER") ?
                            // FIXME admin 구현후 UserMYPage로 
                            // <UserMyPage   ></UserMyPage>
                            <AdminMyPage
                                pageList={pageList}
                                isDetailVisible={isDetailVisible}
                                detailHandling={detailHandling}
                                paginationNum={paginationNum}
                                noticeDetailOnclick={noticeDetailOnclick}
                                detailNoticeData={detailNoticeData}
                                paginationOnclick={paginationOnclick}
                            ></AdminMyPage>
                            :
                            <AdminMyPage
                                pageList={pageList}
                                isDetailVisible={isDetailVisible}
                                detailHandling={detailHandling}
                                paginationNum={paginationNum}
                                noticeDetailOnclick={noticeDetailOnclick}
                                detailNoticeData={detailNoticeData}
                                paginationOnclick={paginationOnclick}
                            ></AdminMyPage>
                    }
                </div>
            </MyPageWrapper>

        </>
    );
};

export default MyPageContent;
