import React from "react"
import { useHistory } from "react-router"
import Profile from "../pages/Profile"

const ProfileRouter = ({ security, userInfo }) => {

    const history = useHistory()
    if (security.includes(userInfo.role)) {
        return <Profile />
    }

    history.push('/profile')
    return null
}

export default ProfileRouter