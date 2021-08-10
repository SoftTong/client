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
                height="500px"
              ></iframe>
            </div>
            <h2>신청서 작성</h2>
            <div className="formsection" height="70%">
              신청서 폼
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
