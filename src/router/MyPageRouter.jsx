import React from "react"
import { useHistory } from "react-router"
import MyPage from "../pages/MyPage"

const MyPageRouter = ({ security, userInfo }) => {

    const history = useHistory()
    if (security.includes(userInfo.role)) {
        return <MyPage />
    }

    history.push('/')
    return null
}

export default MyPageRouter