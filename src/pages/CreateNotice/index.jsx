import React from "react";
import styled from "styled-components";
import ContentContainer from "../../containers/pages/createnotice/ContentContainer";
import Header from "../../containers/redux/components/Header";


const WholeWrapper = styled.div`
  /* display : -webkit-box;
    display : -moz-box; */
  height: 100vh;
  width: 100%;
`;

//TODO header
const CreateNotice = () => {
  return (
    <>
      <WholeWrapper>
        <Header></Header>
        <ContentContainer />

      </WholeWrapper>
    </>
  );
};

export default CreateNotice;
