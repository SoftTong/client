import React from "react"
import { useHistory } from "react-router"
import Test from "../test/testParams"

const TestRouter = ({ security, userInfo }) => {

    const history = useHistory()
    if (security.includes(userInfo.role)) {
        return <Test></Test>
    }

    history.push('/')
    return null
}

export default TestRouter