import store from "../../store/store"
import ACTION from "../../store/actions/action"
import get_logout from "../api/get/get_logout"

const LogoutProcess = () => {
    get_logout()
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=> {console.log(err)})
    //FIXME 통신후 then으로 옮기기
    store.dispatch(ACTION.LOGOUT_ACTION_FUNC())
    store.dispatch(ACTION.DELETE_USER__ACTION_FUNC())
}

export default LogoutProcess