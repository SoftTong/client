import React from "react";

const Test = ({ detailNoticeData }) => {
  console.log("DetailTest");
  console.log(detailNoticeData);
  return (
    <div className="box">
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
        {/* <h2>신청서 작성하기</h2>
        <div className="section submitform">
          <div className="detailbox">
            <div className="detail">
              <p>이름</p>
              <input type="text"></input>
            </div>
          </div>
        </div> */}
        <div className="buttonsection">
          <button className="sub-button detail-button">신청서 작성하기</button>
          <button className="sub-button detail-button">
            첨부파일 제출하기
          </button>
          <button className="sub-button detail-button">돌아가기</button>
        </div>
      </div>
    </div>
  );
};

export default Test;
