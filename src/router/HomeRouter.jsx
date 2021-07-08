import React from "react"
import { useHistory } from "react-router"
import Home from "../pages/Home"

const HomeRouter = ({ security, userInfo }) => {

    const history = useHistory()
    if (security.includes(userInfo.role)) {
        return <Home />
    }

    history.push('/')
    return null
}

export default HomeRouter