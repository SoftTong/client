import React from "react";
import styled from "styled-components";
import ContentContainer from "../../containers/pages/noticelist/ContentContainer";
import Header from "../../containers/redux/components/Header";
import ContentLayout from "../../layout/Content";
import Footer from "../../components/footer";

const WholeWrapper = styled.div`
  /* display : -webkit-box;
    display : -moz-box; */
  height: 100vh;
  width: 100%;
`;

//TODO header
const NoticeList = () => {
  return (
    <>
      <WholeWrapper>
        <Header></Header>
        <ContentLayout>
          <ContentContainer />
        </ContentLayout>
        <Footer></Footer>
      </WholeWrapper>
    </>
  );
};

export default NoticeList;
