import store from "../../store/store"
import ACTION from "../../store/actions/action"
import post_login from "../api/post/post_login"
import get_userInfo from "../api/get/get_userInfo"


const LoginProcess = (logInInfo) =>{

    console.log("check")
    console.log(logInInfo)
    post_login(JSON.stringify(logInInfo))
    .then(async(res)=>{
        console.log("로그인 성공")
        await get_userInfo()
        .then((res)=>{
            console.log("유저정보받아오기 성공")
            console.log(res ||"response 없음")
        }) 
        .catch((err) =>  console.log(err) )
        store.dispatch(ACTION.SET_USER__ACTION_FUNC({
            user : {
                //FIXME response에서 받아온걸로 수정하기
                "email" : "test@test",
                "name":"test" ,
                "userId" :"test" ,
                "phone_number" : "test" ,
                "department " :"test",
            }
        }))
        store.dispatch(ACTION.LOGIN_ACTION_FUNC());
    })
    .catch((err) =>  console.log(err) )
    
    
  
}

export default LoginProcess