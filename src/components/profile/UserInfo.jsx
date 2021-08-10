import React from "react";
import styled from "styled-components";
import { useState } from "react";

// FIXME chaeeun ADD
const ChaeeunDiv = styled.div`
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem 0.375rem 0;
  font-size: 1rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const ChaeeunText = styled.span`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, #cae3f8 50%);
`;

const UserInfo = ({ userProfile, editUserProfileFunctions }) => {
  const [test, setTest] = useState(false);
  console.log(test);
  const buttonShow = () => {
    setTest(!test);
  };
  const stopBubbling = (e) => {
    e.stopPropagation()
  }
  return (
    <div className="col-lg-9 userinfotext">
      <div className="section-title">
        <p>내정보</p>
      </div>
      <div className="box h-50">
        <div className="d-flex align-items-center">
          <div className="section">
            <form>
              <div className="col-md-12">
                <p>학번</p>
                {/* <input
                  type="text"
                  className="form-control"
                  placeholder="학번을 입력하세요"
                /> */}
                <ChaeeunDiv>
                  <ChaeeunText>{userProfile.userId}</ChaeeunText>
                </ChaeeunDiv>
              </div>

              <div className="col-md-12">
                <p>이름</p>
                {/* <input
                  type="text"
                  className="form-control"
                  placeholder="이름을 입력하세요"
                /> */}
                <ChaeeunDiv>
                  <ChaeeunText>{userProfile.name}</ChaeeunText>
                </ChaeeunDiv>
              </div>
              <div className="col-md-12">
                <p>학과</p>
                {/* <input
                  type="text"
                  className="form-control"
                  placeholder="소속을 입력하세요"
                /> */}
                <ChaeeunDiv>
                  <ChaeeunText>{userProfile.department}</ChaeeunText>
                </ChaeeunDiv>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="section-title">
        <p>내정보 수정</p>
      </div>
      <div className="box h-50">
        <div className="d-flex align-items-center">
          <div className="section">
            <form onClick={stopBubbling}>
              <div className="col-md-12">
                <p>이메일</p>
                <div className="inputsubmit">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="이메일을 입력하세요"
                    defaultValue={userProfile.email}
                    onChange={editUserProfileFunctions.email}
                  />
                  {
                    test ?
                      <button onClick={buttonShow} className="sub-button">
                        저장
                      </button> :
                      <button onClick={buttonShow} className="sub-button">
                        변경
                      </button>
                  }
                </div>
              </div>
              <div className="col-md-12">
                <p>휴대폰번호</p>
                <div className="inputsubmit">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="휴대폰번호를 입력하세요"
                    defaultValue={userProfile.phone_number}
                    onChange={editUserProfileFunctions.phone_number}
                  />
                  <button type="submit" className="sub-button">
                    저장
                  </button>
                </div>
              </div>
              <div className="col-md-12">
                <p>비밀번호</p>
                <div className="inputsubmit">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="변경할 비밀번호를 입력하세요"
                  />
                  <button type="submit" className="sub-button">
                    저장
                  </button>
                </div>
              </div>
              <button onClick={buttonShow} className="sub-button">
                {test ? "저장" : "변경"}
              </button>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
};

export default UserInfo;
