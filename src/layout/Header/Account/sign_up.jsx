//Redux
import React from 'react'
import styled from "styled-components"


const LoginWrapper = styled.div`
display : flex;
padding : 10px 20px;
flex-direction: column;
`

const LoginItem = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items : center;
margin-bottom : 24px;
`

const Required = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    margin-right: 4px;
    color: #ff4d4f;
    font-size: 14px;
    font-family: SimSun, sans-serif;
    line-height: 1;

`

const LogInTypo = styled.div`
font-size : 1rem;
min-width : 5rem;
display: flex;
align-items: center;
 justify-content: flex-end;
`
const LogInTextBox = styled.input.attrs(props => ({ type: "text" }))`

border : 1px solid #d9d9d9 ;
padding : 4px 11px;
font-size: 1rem;
 border-radius :2px;
color : #707070;
margin-left: 1rem;
&:focus{
    outline : none;
};
&:hover{
    border : 1px solid #1890ff;
}
@media screen and (max-width: 992px){
    text-align: center;
}
`

const LoginBtn = styled.div`
display : flex;
background-color:  #0f8cff;
color : white;
align-items: center;
 justify-content: center;
padding : 9px 20px;
font-size: 14px;
    border-radius: 2px;
    cursor : pointer;
`
const SignUp = ({ handleLoginModal }) => {
    return (
        <>
            <LoginWrapper>
                <LoginItem>
                    <LogInTypo>    <Required>*</Required>학번</LogInTypo>
                    <LogInTextBox></LogInTextBox>
                </LoginItem>
                <LoginItem>
                    <LogInTypo><Required>*</Required>이메일</LogInTypo>
                    <LogInTextBox></LogInTextBox>
                </LoginItem>
                <LoginItem>
                    <LogInTypo><Required>*</Required>비밀번호</LogInTypo>
                    <LogInTextBox></LogInTextBox>
                </LoginItem>
                <LoginItem>
                    <LoginBtn onClick={handleLoginModal.close}>가입하기</LoginBtn>
                </LoginItem>
            </LoginWrapper>
        </>
    )
}


export default SignUp