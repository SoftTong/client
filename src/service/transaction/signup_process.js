import post_signup from "../api/post/post_signup";
import LoginProcess from "./login_process";

const SignupProcess = (signUpInfo) =>{
console.log("aa")
    console.log(signUpInfo)
    const LoginInfo = {
        "username" : signUpInfo.name,
        "password" : signUpInfo.password,
    }

    post_signup(JSON.stringify(signUpInfo))
    .then((res)=>{
        console.log(res)
        LoginProcess(LoginInfo)
    })
    .catch(err => console.log(err))
}


export default SignupProcess