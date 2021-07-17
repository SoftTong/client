import store from "../../store/store"
import ACTION from "../../store/actions/action"
import get_logout from "../api/get/get_logout"
const LogoutProcess = () => {
    get_logout()
    .then((res)=>{
        console.log(res ||"response 없음")
        console.log("로그아웃 성공")
        store.dispatch(ACTION.LOGOUT_ACTION_FUNC())
        store.dispatch(ACTION.DELETE_USER__ACTION_FUNC())
    })
    .catch((err)=> {console.log(err)})

  
}

export default LogoutProcess