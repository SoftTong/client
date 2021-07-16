import store from "../../store/store"
import ACTION from "../../store/actions/action"

const LogoutProcess = () => {
    store.dispatch(ACTION.LOGOUT_ACTION_FUNC())
    store.dispatch(ACTION.DELETE_USER__ACTION_FUNC())
}

export default LogoutProcess