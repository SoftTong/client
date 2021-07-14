import React from 'react'
import LogoImg from '../../img/logo_.png'
import styled from "styled-components"
import { useHistory } from "react-router-dom"
import { useState } from 'react'
import Modal from "../../components/atoms/Modal"
import Account from "./Account"
const HeaderWrapper = styled.div`
  top : 0;
    left : 0;
    right : 0;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
    height : 78px;
    display : flex;
  align-items: center;
  justify-content : center;
    @media(max-width: 1200px){
    height : 64px;
  }
  @media(max-width: 768px){
    height : 56px;
  }
  @media(max-width: 576px){
    height : 40px;
  }
`
const HeaderContent = styled.div`
display : flex;
align-items: center;
  justify-content : space-between;
  height : inherit;
  flex-basis : 1427px;

`
const Logo = styled.img.attrs((props) => ({
  src: props.src
}))`
height : 40px;
flex-basis : 40px;
display: flex;
justify-content: start;
  align-items: center;
  cursor : pointer;
`
const HeaderList = styled.div`
display : flex;
height: inherit;
flex-basis : 800px;
justify-content: space-between;
`
const ListValue = styled.div`
font-weight: 400;
height : inherit;
display : flex;
flex-grow : 1;
justify-content: center;
  align-items: center;
  font-size: 1rem;
  /* color : #3d61a8; */
  color : #0f8cff;
  cursor : pointer;
  &:hover{
    color :  #3d61a8; 
     font-weight: 500; 
  }
`
const LoginLogoutBtn = styled.div`
display : flex;
justify-content: flex-end;
align-items: center;
height: inherit;
`
const LoginBtn = styled.div`
height : 40px;
padding :0 20px;
border-radius : 40px;
background-color:  #0f8cff; ;
color : white;
display : flex;
align-items: center;
justify-content: center;
cursor : pointer;
`

const Header = () => {
  const history = useHistory();
  const [isLoginModal, setIsLoginModalVisible] = useState(false);
  const handleLoginModal = {
    show: () => setIsLoginModalVisible(true),
    close: () => setIsLoginModalVisible(false)
  }
  const [isSignUpModal, setIsSignUpModalVisible] = useState(false)
  const handleSignUpModal = {
    show: () => setIsSignUpModalVisible(true),
    close: () => setIsSignUpModalVisible(false)
  }

  return (
    <>
      <HeaderWrapper>
        <HeaderContent>
          <Logo onClick={() => { history.push("/") }} src={LogoImg} />

          <HeaderList>
            <ListValue onClick={() => { history.push("/") }}>공지사항</ListValue>
            <ListValue onClick={() => { history.push("/") }} >마이페이지</ListValue>
            <ListValue onClick={() => { history.push("/") }} >보고서 제출</ListValue>
          </HeaderList>

          <LoginLogoutBtn>

            <LoginBtn onClick={handleLoginModal.show}>Login</LoginBtn>
            <Modal closable={true} title={isSignUpModal ? "회원가입이 필요합니다.🎯" : "로그인이 필요합니다.🎯"} visible={isLoginModal}
              maskClosable={true} onClose={handleLoginModal.close} >
              <Account isSignUpModal={isSignUpModal} handleSignUpModal={handleSignUpModal} handleLoginModal={handleLoginModal}    ></Account>
            </Modal>
          </LoginLogoutBtn>

        </HeaderContent>
      </HeaderWrapper>

    </>
  )
}


export default Header;