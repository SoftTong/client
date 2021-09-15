import React from "react"
import { useHistory } from "react-router"
import AdminPage from "../pages/AdminPage"

const AdminPageRouter = ({ security, userInfo }) => {

    const history = useHistory()
    if (security.includes(userInfo.role)) {
        return <AdminPage />
    }

    history.push('/')
    return null
}

export default AdminPageRouter