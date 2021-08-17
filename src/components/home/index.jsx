//NOTE HOME CONTENT
import React from "react";
import get_noticelist from "../../service/api/get/get_noticedetail";

const HomeContent = () => {
  const getnoticeList0 = () => {
    get_noticelist(0)
      .then((res) => {
        console.log(res);
        console.log(res.content);
      })
      .catch((err) => console.log(err));
  };

  console.log("getNoticeList");
  getnoticeList0();

  return (
    <>
      <div className="col-lg-12 userinfotext">
        <div className="section-title">
          <p>프로그램 신청</p>
        </div>

        <div className="box">
          <div className="align-items-center">
            <h2>2021학년도 2학기 튜티모집</h2>
            <div className="section">
              <iframe
                src="https://sw7up.cbnu.ac.kr/community/notice/61108786d2329b2b74c84c02"
                width="100%"
                height="650px"
              ></iframe>
            </div>
            <h2>첨부파일 제출하기</h2>
            <div className="section submitform">
              <div className="detailbox">
                <div className="detail">
                  <p>이름</p>
                  <input type="text"></input>
                </div>
              </div>
            </div>
            <div className="buttonsection">
              <button className="sub-button detail-button">신청하기</button>
              <button className="sub-button detail-button">돌아가기</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
