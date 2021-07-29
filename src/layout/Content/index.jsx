import React from "react";
import styled from "styled-components";

const ContentStyle = styled.div`
  width: 1530px;
  margin-left: auto;
  margin-right: auto;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 4.2vh 0vw;
  flex-direction: column;
  box-sizing: border-box;

  @media screen and (max-width: 1790px) {
    width: 1240px;
  }

  @media screen and (max-width: 1440px) {
    width: 990px;
  }

  @media screen and (max-width: 1056px) {
    width: calc(100% - 2rem);
    padding: 2.6vh 2.6vw;
  }
`;

const Content = ({ children, style }) => {
  return (
    <>
      <ContentStyle style={style}>{children}</ContentStyle>
    </>
  );
};

export default Content;
