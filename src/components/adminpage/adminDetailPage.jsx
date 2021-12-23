import { React, useState } from "react";
import styled from "styled-components"
import { Row, Col, Button, Tooltip } from 'antd';
import Modal from "../atoms/Modal"
import Typo from "../atoms/Typo"
import { DownloadOutlined } from '@ant-design/icons';

const DetailArea = styled.div`
width: 100%;
  background-color: white;
  min-width: 0px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  box-shadow: rgb(0 0 0 / 2%) 0px 0px 8px;
  padding: 2rem 3rem 3rem;
`;


const DownloadWrapper = styled.div`
display : flex;
justify-content : center;
margin-top : 5px;
padding-left : 5px;

`

const UserIdTag = styled.div`
      color:  #2c2f36;
    background: #f2f2f3;
    border-color:#595a60;
    margin:  0 8px  0 0;
    display: inline-block;
    height: auto;
    padding: 0 7px;
    border: 1px solid #d9d9d9;
    border-radius: 7px;
    height: auto;
    padding: 0 7px;
    font-size: 12px;

`

const FileDownload = styled.div`
cursor : pointer;
font-size: 13px;

cursor: pointer;
color : #0779e4;
&:hover {
        weight : bold;
    }
`


const TableTitle = styled.div`
    margin-top : 20px;
    width: 100%;
    height: 50px;
    border-bottom: black;
    padding-left: 20px;
    font-size: 25px;
    font-weight: bold;
    color: rgb(148, 148, 148);
    align-items: center;
    display: flex;
    justify-content : space-between;
    cursor : default;
`

const Table = styled.table`
width: -webkit-fill-available;
    max-height: 650px;
    overflow: auto;
    background-color: rgb(255, 255, 255);
`

const THead = styled.thead`
padding: 0 1.5rem;
    position : sticky;
    top : 0;
    background: rgb(255 255 255);
    z-index : 10;
    box-shadow: rgb(0 0 0 / 8%) 0px 1px 12px;
`
const HTr = styled.tr`
height : 48px;
  box-sizing: border-box;
  text-align: center !important;
 `

const HTh = styled.th`
    border: none;
    font-size: 1rem;
    font-weight: 500;
`


const TBody = styled.tbody`
  
    padding-top: 20px;
    margin-left: 0px !important;
    margin-right: 0px !important;
    height : auto;
  
 `

const BTd = styled.td`
 text-align: center;
  border-bottom: 1px rgb(239 239 239) solid;
    font-size: 0.9rem;
    font-weight: normal;
    font-stretch: normal;
    color: #707070;
    padding: 12px 6px;
    word-break : keep-all;
`

const TBodyStatus = styled.span`
    box-sizing: border-box;
    margin-right:  8px;
    width : fit-content;
    height: auto;
    padding: 5px 10px;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    opacity: 1;
    transition: all .3s;
    text-transform: uppercase;
    cursor : default;
    ${props => (props.btn ? `cursor : pointer ` : null)};
    ${props => {
    switch (props.types) {
      case "confirm":
        return `
          color: #1d39c4;
          background: #f0f5ff;
          border-color: #adc6ff;
          `
      case "reject":
        return `
          color: #d4380d;
          background: #fff2e8;
          border-color: #ffbb96;
          `
      default:
        return `
            color: #389e0d;
            background: #f6ffed;
            border-color: #b7eb8f;
          `
    }
  }}
`
const FormQnAWrapper = styled.div`
 
  padding: 16px;
  display : flex;
justify-content : space-around;
align-items : center;
`
const QuestionAnswerBox = styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
`

const QuestionBox = styled.div`
font-size : 1rem;
margin-right : 5px;
color: #000000d9;

font-weight : bold;
`
const AnswerBox = styled.div`
font-size : 1rem;
color: #0000009e;
`

const AdminDetailPage = ({ detailNoticeData,
  applyUsers,
  userPaginationNum,
  userPaginationOnClick,
  isStatusModalVisible,
  handleStatusModal,
  statusBtnOnClick,
  downloadFileOnClick,
  statusChangeOnClick,
  noticeDeleteOnClick,


}) => {


  return (
    <>
      {/* CreateNotice 관련 component */}
      {/* SECTION 게시글 작성하기 */}
      <Row>
        <Col span={24}>
          <h2>{detailNoticeData.title}</h2>

        </Col>
        <Col span={24}>
          {detailNoticeData.tag1 ? (
            <span className="tagcategory detailtag">{detailNoticeData.tag1}</span>
          ) : null}
          {detailNoticeData.tag2 ? (
            <span className="tagcategory detailtag">{detailNoticeData.tag2}</span>
          ) : null}
          {detailNoticeData.tag3 ? (
            <span className="tagcategory detailtag">{detailNoticeData.tag3}</span>
          ) : null}
        </Col>
        <Col span={12} >
          작성일 : {detailNoticeData.startDay}
        </Col>
        <Col span={12}>
          마감일 : {detailNoticeData.destDay}
        </Col>
        <Col span={24}>
          <TableTitle
            onClick={() => {

            }}>
            지원자 정보
            <Button onClick={noticeDeleteOnClick} danger style={{ padding: '5px 20px' }}>게시글 삭제</Button>
          </TableTitle>


          <Table>
            <THead>
              <HTr>
                <th >이름</th>
                <th >상태</th>
              </HTr>
            </THead>
            <TBody

              onClick={() => {

              }}
            >

              {

                applyUsers.map(
                  (
                    { userId, userName, status, userFileTitle, userFilePath, applyId, isForm,
                      question, answer }
                  ) => (
                    (isForm) ?
                      // NOTE form
                      <>
                        <tr>

                          <BTd  >
                            <UserIdTag>{userId}</UserIdTag>
                            {userName}{applyId}


                          </BTd>

                          <BTd >
                            <TBodyStatus types={status}>{status}</TBodyStatus>
                            <Button type="dashed" onClick={() => { statusBtnOnClick(applyId) }} >
                              상태변경
                            </Button>
                            <Modal closable={true} title={"신청자 상태 수정하기"}
                              visible={isStatusModalVisible}
                              maskClosable={true}
                              onClose={handleStatusModal.close}>
                              <Row>
                                <Col span={12}>원하는 상태를 클릭해 주세요.</Col>
                                <Col span={12}>
                                  <TBodyStatus btn onClick={() => { statusChangeOnClick.wait() }} types={"wait"}>Wait</TBodyStatus>
                                  <TBodyStatus btn onClick={() => { statusChangeOnClick.confirm() }} types={"confirm"}>Confirm</TBodyStatus>
                                  <TBodyStatus btn onClick={() => { statusChangeOnClick.reject() }} types={"reject"}>Reject</TBodyStatus>
                                </Col>
                              </Row>
                            </Modal>
                          </BTd>
                        </tr>

                        <tr>
                          <td colspan="2" style={{ backgroundColor: 'rgb(239 239 239)', borderBottom: '1px rgb(131, 131, 131) solid' }} >
                            <FormQnAWrapper>
                              {
                                question.map((questions, index) => {
                                  return (
                                    <>
                                      <QuestionAnswerBox key={index}>
                                        <QuestionBox >{questions} </QuestionBox>
                                        <AnswerBox >{answer[index]}</AnswerBox>

                                      </QuestionAnswerBox>

                                    </>
                                  )
                                })
                              }

                            </FormQnAWrapper>
                          </td>
                        </tr>
                      </>
                      :
                      <>

                        <tr key={applyId}>

                          <BTd  >
                            <UserIdTag>{userId}</UserIdTag>
                            {userName}{applyId}
                            <DownloadWrapper>
                              <Tooltip placement="right" title="클릭 시 파일이 다운됩니다.">
                                <FileDownload onClick={() => { downloadFileOnClick(userFilePath) }}>
                                  {userFileTitle}
                                  <DownloadOutlined style={{ color: '#9baacf' }} />
                                </FileDownload>
                              </Tooltip>
                            </DownloadWrapper>
                          </BTd>

                          <BTd >
                            <TBodyStatus types={status}>{status}</TBodyStatus>
                            <Button type="dashed" onClick={() => { statusBtnOnClick(applyId) }} >
                              상태변경
                            </Button>
                            <Modal closable={true} title={"신청자 상태 수정하기"}
                              visible={isStatusModalVisible}
                              maskClosable={true}
                              onClose={handleStatusModal.close}>
                              <Row>
                                <Col span={12}>원하는 상태를 클릭해 주세요.</Col>
                                <Col span={12}>
                                  <TBodyStatus btn onClick={() => { statusChangeOnClick.wait() }} types={"wait"}>Wait</TBodyStatus>
                                  <TBodyStatus btn onClick={() => { statusChangeOnClick.confirm() }} types={"confirm"}>Confirm</TBodyStatus>
                                  <TBodyStatus btn onClick={() => { statusChangeOnClick.reject() }} types={"reject"}>Reject</TBodyStatus>
                                </Col>
                              </Row>
                            </Modal>
                          </BTd>
                        </tr>


                      </>
                  )

                )}
            </TBody>
          </Table>


          {
            (applyUsers) ?
              <div className="pagination">
                <ul>
                  {
                    userPaginationNum.map((i, index) => {
                      return (
                        <li key={i} onClick={userPaginationOnClick}>
                          {userPaginationNum[index]}
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
              :
              null
          }

        </Col>
      </Row>



    </>
  )
}

export default AdminDetailPage