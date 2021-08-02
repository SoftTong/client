import React from "react"
import { useHistory } from "react-router"
import CreateNotice from "../pages/CreateNotice"

const CreateNoticeRouter = ({ security, userInfo }) => {

    const history = useHistory()
    if (security.includes(userInfo.role)) {
        return <CreateNotice />
    }

    history.push('/createnotice')
    return null
}

export default CreateNoticeRouter