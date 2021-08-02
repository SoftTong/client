import React from "react";

const UserInfo = () => {
  return (
    <div className="col-lg-9">
      <div className="section-title">
        <p>정보수정</p>
      </div>
      <div className="box h-100">
        <div className="d-flex align-items-center">
          <div className="section">
            <form>
              <div className="col-md-12">
                <p>학번</p>
                <input
                  type="text"
                  className="form-control"
                  placeholder="학번을 입력하세요"
                />
              </div>

              <div className="col-md-12">
                <p>이름</p>
                <input
                  type="text"
                  className="form-control"
                  placeholder="이름을 입력하세요"
                />
              </div>
              <div className="col-md-12">
                <p>이메일</p>
                <input
                  type="email"
                  className="form-control"
                  placeholder="이메일을 입력하세요"
                />
              </div>
              <div className="col-md-12">
                <p>휴대폰번호</p>
                <input
                  type="number"
                  className="form-control"
                  placeholder="휴대폰번호를 입력하세요"
                />
              </div>
              <div className="col-md-12">
                <p>소속</p>
                <input
                  type="text"
                  className="form-control"
                  placeholder="소속을 입력하세요"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="button">
          <button type="submit" className="sub-button">
            초기화
          </button>
          <button type="submit" className="sub-button">
            저장
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
