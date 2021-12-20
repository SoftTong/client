import { React, useState } from "react";
import styled from "styled-components"
import { Row, Col } from 'antd';



const CreateNoticeWrapper = styled.div`
  width: 100%;
  height: calc(100% - 78px);
  border-top: rgb(234 234 234) 2px solid;
  display: flex;
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

const DetailArea = styled.div`
  background-color: white;
  min-width: 0px;
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  box-shadow: rgb(0 0 0 / 2%) 0px 0px 8px;
  padding: 2rem 3rem 3rem;
`;



const ApplyUserArea = styled.div`
  min-width: 0px;
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: auto;
  word-break: break-word;
  padding: 2rem 3rem 0 3rem;
  background-color: rgb(251, 253, 252);
`;


const adminDetailPage = ({ detailNoticeData }) => {




  return (
    <>
      <CreateNoticeWrapper>
        {/* CreateNotice 관련 component */}
        {/* SECTION 게시글 작성하기 */}
        <Row>
          <Col md={0} lg={12} xl={12}>
            <DetailArea>
              <div className="align-items-center">
                <h2>{detailNoticeData.title}</h2>

                {detailNoticeData.tag1 ? (
                  <span className="tagcategory detailtag">{detailNoticeData.tag1}</span>
                ) : null}
                {detailNoticeData.tag2 ? (
                  <span className="tagcategory detailtag">{detailNoticeData.tag2}</span>
                ) : null}
                {detailNoticeData.tag3 ? (
                  <span className="tagcategory detailtag">{detailNoticeData.tag3}</span>
                ) : null}
                <div className="date">
                  <p>작성일 : {detailNoticeData.startDay}</p>
                  <p>마감일 : {detailNoticeData.destDay}</p>
                </div>

                <hr></hr>
                <div className="section">
                  <iframe
                    src={detailNoticeData.swurl}
                    width="100%"
                    height="650px"
                  ></iframe>
                </div>
              </div>
            </DetailArea>

          </Col>

        </Row>

        {/*! SECTION  */}

        {/* SECTION 게시글 미리보기 */}
        <Col md={24} lg={12} xl={12}>
          <ApplyUserArea>

          </ApplyUserArea>
        </Col>

        {/*! SECTION 게시글  */}
      </CreateNoticeWrapper>
    </>
  )
}

export default adminDetailPage