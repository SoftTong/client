import store from "../../store/store"
import ACTION from "../../store/actions/action"
import post_login from "../api/post/post_login"
import get_userInfo from "../api/get/get_userInfo"

const LoginProcess = (logInInfo) =>{

    console.log("check")
    console.log(logInInfo)
    post_login(JSON.stringify(logInInfo))
    .then(async(token)=>{
        console.log("로그인 성공")
        console.log(token)
        if(token.accessToken){
            localStorage.setItem("SoTong-token",token.accessToken)
            return(get_userInfo())
        }else{
            // eslint-disable-next-line
            throw {error : "AccessToken not exist"}
        }
    }).then(async (res)=>{
        console.log("유저정보받아오기성공")
        console.log(res);

        store.dispatch(ACTION.SET_USER__ACTION_FUNC({
                    user : {
                        "email" : "test@test",
                        "name":"test" ,
                        "userId" :"test" ,
                        "phone_number" : "test" ,
                        "department " :"test",
                    }
                }))
                store.dispatch(ACTION.LOGIN_ACTION_FUNC());

    }).catch((err)=>console.log(err))
    .catch((err) =>  console.log(err) )
    
    
  
}

export default LoginProcess