import React from "react";

const UserInfo = () => {
  return (
    <div class="col-lg-9">
      <div class="section-title">
        <p>정보수정</p>
      </div>
      <div class="box h-100">
        <div class="d-flex align-items-center">
          <div class="section">
            <form>
              <div class="col-md-12">
                <p>학번</p>
                <input
                  type="text"
                  class="form-control"
                  placeholder="학번을 입력하세요"
                />
              </div>

              <div class="col-md-12">
                <p>이름</p>
                <input
                  type="text"
                  class="form-control"
                  placeholder="이름을 입력하세요"
                />
              </div>
              <div class="col-md-12">
                <p>이메일</p>
                <input
                  type="email"
                  class="form-control"
                  placeholder="이메일을 입력하세요"
                />
              </div>
              <div class="col-md-12">
                <p>휴대폰번호</p>
                <input
                  type="number"
                  class="form-control"
                  placeholder="휴대폰번호를 입력하세요"
                />
              </div>
              <div class="col-md-12">
                <p>소속</p>
                <input
                  type="text"
                  class="form-control"
                  placeholder="소속을 입력하세요"
                />
              </div>
            </form>
          </div>
        </div>
        <div class="button">
          <button type="submit" class="sub-button">
            초기화
          </button>
          <button type="submit" class="sub-button">
            저장
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
