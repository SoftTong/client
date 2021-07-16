import store from "../../store/store"
import ACTION from "../../store/actions/action"
import post_login from "../api/post/post_login"



const LoginProcess = (logInInfo) =>{

    console.log("check")
    console.log(logInInfo)
    post_login(JSON.stringify(logInInfo))
    .then((res)=>{
        console.log("로그인 성공")
        console.log(res)
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
    .catch((err) => { console.log(err) })
    //FIXME  REDUX TEST CODE 
    console.log("로그인 성공")
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
}

export default LoginProcess