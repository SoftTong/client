import React from "react";
import LogoImg from "../../img/logo_.png";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import Modal from "../../components/atoms/Modal";
import Account from "./AccountModal";
import LoginProcess from "../../service/transaction/login_process";
import SignupProcess from "../../service/transaction/signup_process";
import LogoutProcess from "../../service/transaction/logout_process";

import HeaderLayout from "../../layout/Header";

const HeaderWrapper = styled.div`
  top: 0;
  left: 0;
  right: 0;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
  height: 78px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1024px) {
    height: 64px;
  }
  @media (max-width: 768px) {
    height: 56px;
  }
  @media (max-width: 480px) {
    height: 40px;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: inherit;
  flex-basis: 1427px;
`;
const Logo = styled.img.attrs((props) => ({
  src: props.src,
}))`
  height: 40px;
  flex-basis: 40px;
  display: flex;
  justify-content: start;
  align-items: center;
  cursor: pointer;
`;
const HeaderList = styled.div`
  display: flex;
  height: inherit;
  flex-basis: 800px;
  justify-content: space-between;
`;
const ListValue = styled.div`
  font-weight: 400;
  height: inherit;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  font-size: 1.05rem;
  /* color : #3d61a8; */
  color: #0f8cff;
  cursor: pointer;
  &:hover {
    transition: all 0.225s ease-in 0s;
    color: #3d61a8;
    font-weight: 500;
  }
`;
const LoginLogoutBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: inherit;
`;
const LoginBtn = styled.div`
  height: 40px;
  padding: 0 20px;
  border-radius: 40px;
  background-color: #0f8cff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  min-width: 4rem;
  ${(props) =>
    props.logout
      ? `
border: 1px solid #0f8cff;
background-color : #f8f9fa;
color : #0f8cff;
&:hover{
  background-color :  #0f8cff;
  color : #f8f9fa;
  transition: all 0.125s ease-in 0s;
  }
`
      : null}
  &:hover {
    background: rgb(15, 140, 255, 0.8);
  }
`;

const Header = ({
  logined,
  role,
  //FIXME role 수정후 삭제
  phone_number,
}) => {
  const history = useHistory();
  //SECTION 모달 관리
  const [isLoginModal, setIsLoginModalVisible] = useState(false);
  const handleLoginModal = {
    show: () => setIsLoginModalVisible(true),
    close: () => {
      setIsLoginModalVisible(false);
      setIsSignUpModalVisible(false);
      setSignUpInfo({
        email: "",
        password: "",
        name: "",
        userId: "",
        phoneNumber: "",
        department: "",
      });
      setLoginInfo({
        userId: "",
        password: "",
      });
    },
  };

  const [isSignUpModal, setIsSignUpModalVisible] = useState(false);
  const handleSignUpModal = {
    show: () => setIsSignUpModalVisible(true),
    close: () => setIsSignUpModalVisible(false),
  };
  //! SECTION

  //SECTION 회원가입 정보
  const [signUpInfo, setSignUpInfo] = useState({
    email: "",
    password: "",
    name: "",
    userId: "",
    phoneNumber: "",
    department: "",
  });
  const [logInInfo, setLoginInfo] = useState({
    userId: "",
    password: "",
  });
  //TODO 코드 정리
  let settingSingUpFunction = {
    email: (e) => {
      const email = e.target.value;
      return setSignUpInfo((state) => ({ ...state, email: email }));
    },
    password: (e) => {
      const password = e.target.value;
      return setSignUpInfo((state) => ({ ...state, password: password }));
    },
    name: (e) => {
      const name = e.target.value;
      return setSignUpInfo((state) => ({ ...state, name: name }));
    },
    userId: (e) => {
      const userId = e.target.value;
      return setSignUpInfo((state) => ({ ...state, userId: userId }));
    },
    phone_number: (e) => {
      const phoneNumber = e.target.value;
      return setSignUpInfo((state) => ({ ...state, phoneNumber: phoneNumber }));
    },
    department: (e) => {
      const department = e.target.value;
      return setSignUpInfo((state) => ({ ...state, department: department }));
    },
    status: (e) => {
      const status = e.target.value;
      return setSignUpInfo((state) => ({ ...state, status: status }));
    },
  };

  let settingLogInFunction = {
    userId: (e) => {
      const userId = e.target.value;
      return setLoginInfo((state) => ({ ...state, userId: userId }));
    },

    password: (e) => {
      const password = e.target.value;
      return setLoginInfo((state) => ({ ...state, password: password }));
    },
  };

  //!SECTION

  // SECTION 로그인 회원가입 함수
  const LoginBtnOnclick = () => {
    LoginProcess(logInInfo);
    setLoginInfo({
      userId: "",
      password: "",
    });
    handleLoginModal.close();
  };
  const SignupBtnOnclick = () => {
    SignupProcess(signUpInfo);
    handleLoginModal.close();
    setSignUpInfo({
      email: "",
      password: "",
      name: "",
      userId: "",
      phoneNumber: "",
      department: "",
    });
  };
  //!SECTION

  return (
    <>
      <HeaderWrapper>
        <HeaderLayout>
          <HeaderContent>
            <Logo
              onClick={() => {
                history.push("/");
              }}
              src={LogoImg}
            />

            <HeaderList>
              <ListValue
                onClick={() => {
                  history.push("/notice");
                }}
              >
                공지사항
              </ListValue>
              <ListValue
                onClick={() => {
                  history.push("/profile");
                }}
              >
                PROFILE
              </ListValue>
              {role === "ADMIN" ||
              //FIXME role 수정후 삭제
              phone_number === "01036296541" ? (
                <ListValue
                  onClick={() => {
                    history.push("/adminpage");
                  }}
                >
                  adminpage
                </ListValue>
              ) : (
                <ListValue
                  onClick={() => {
                    history.push("/mypage");
                  }}
                >
                  MYPAGE
                </ListValue>
              )}

              <ListValue
                onClick={() => {
                  history.push("/createnotice");
                }}
              >
                게시글 작성
              </ListValue>
            </HeaderList>

            {logined ? (
              <>
                <LoginLogoutBtn>
                  <LoginBtn logout onClick={LogoutProcess}>
                    Logout
                  </LoginBtn>
                </LoginLogoutBtn>
              </>
            ) : (
              <>
                <LoginLogoutBtn>
                  <LoginBtn onClick={handleLoginModal.show}>Login</LoginBtn>
                  <Modal
                    closable={true}
                    title={
                      isSignUpModal
                        ? "회원가입이 필요합니다.🎯"
                        : "로그인이 필요합니다.🎯"
                    }
                    visible={isLoginModal}
                    maskClosable={true}
                    onClose={handleLoginModal.close}
                  >
                    <Account
                      isSignUpModal={isSignUpModal}
                      handleSignUpModal={handleSignUpModal}
                      LoginBtnOnclick={LoginBtnOnclick}
                      SignupBtnOnclick={SignupBtnOnclick}
                      signUpInfo={signUpInfo}
                      settingSingUpFunction={settingSingUpFunction}
                      settingLogInFunction={settingLogInFunction}
                      logInInfo={logInInfo}
                    ></Account>
                  </Modal>
                </LoginLogoutBtn>
              </>
            )}
          </HeaderContent>
        </HeaderLayout>
      </HeaderWrapper>
    </>
  );
};

export default Header;
