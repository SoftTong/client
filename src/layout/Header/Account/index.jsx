//Redux
import React from 'react'
import LogIn from './log_in'
import SignUp from "./sign_up"
import styled from "styled-components"



const LoginBtn = styled.div`
height : 25px;
padding :8px 20px;
color :  #0f8cff;
display : flex;
align-items: center;
justify-content: center;
cursor : pointer;
height : 100%;
border : 1px dashed #0f8cff;

`
const DividerText = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-bottom : 12px;
`

/**
 * @param  isSignUp - signUp 버튼 클릭 시 true 
 */



const Container = ({ isSignUpModal,
    handleSignUpModal,
    handleLoginModal,
    LoginBtnOnclick,
    SignupBtnOnclick,
    signUpInfo,
    settingSingUpFunction,
    settingLogInFunction,
    logInInfo
}) => {



    return (
        <>
            {
                (isSignUpModal) ?
                    <>
                        {/* <div className = "SignBtn" onClick={handleSignIn} > SignIn</div> */}

                        {/* <SignUp closeModal={handleLoginModal.close}></SignUp> */}
                        <SignUp signUpInfo={signUpInfo}
                            settingSingUpFunction={settingSingUpFunction}
                            SignupBtnOnclick={SignupBtnOnclick}
                            handleLoginModal={handleLoginModal}
                        ></SignUp>
                        <DividerText>이미 가입하셨나요?</DividerText>
                        <LoginBtn onClick={handleSignUpModal.close}>로그인</LoginBtn>


                    </> :
                    <>
                        {/* <div className = "SignBtn" onClick={handleSignUp} > SignUp</div> */}
                        <LogIn settingLogInFunction={settingLogInFunction}
                            logInInfo={logInInfo} handleLoginModal={handleLoginModal} LoginBtnOnclick={LoginBtnOnclick}></LogIn>
                        <DividerText>계정이 없으신가요?</DividerText>
                        <LoginBtn onClick={handleSignUpModal.show}>회원가입</LoginBtn>
                    </>
            }

        </>
    )
}

export default Container