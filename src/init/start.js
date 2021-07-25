import jwt_decode from "jwt-decode"
import store from "../store/store"
import ACTION from "../store/actions/action"
import get_userInfo from "../service/api/get/get_userInfo"

//  localStorage 에 있으나 로그인이 안된경우
    //case 1 . 토큰 만료전 -> redux login : true
    //case 2. 토큰 만료후 -> 토큰 삭제 

    let SotongToken = {
        decode : (token) =>{
            return jwt_decode(token)
        },
        //토큰 유효시간 확인후 유효하면 true / false
    IsExpiredIn : (decodedToken) =>{
        const expireDate = decodedToken["exp"] * 1000;
        const date = Date.now();
        return (expireDate>date) ? true : false;
    }
    }

const start =  ()=>{
    if(localStorage.getItem("SoTong-token"))
    {
        let ACCESS_TOKEN = localStorage.getItem("SoTong-token")
        const decodeToken = SotongToken.decode(ACCESS_TOKEN);
        const tokenExpired = SotongToken.IsExpiredIn(decodeToken);
        //case 1
        if(tokenExpired){
            store.dispatch(ACTION.LOGIN_ACTION_FUNC());
            get_userInfo()
            .then(res=>{
                console.log(res)
                store.dispatch(ACTION.SET_USER__ACTION_FUNC({
                    user : {
                        "email" : "test@test",
                        "name":"test" ,
                        "userId" :"test" ,
                        "phone_number" : "test" ,
                        "department " :"test",
                        "role" :"test"
                    }
                }))
        }).catch((err)=>console.log(err))
        }else{
            localStorage.removeItem("SoTong-token")
            console.log("토큰만료_localStorage_remove")
        }
    }else{
        console.log("start app...")
    }
}

export default start;