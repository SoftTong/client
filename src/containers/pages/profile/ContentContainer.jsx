import React, { useState } from 'react';
import ProfileContent from '../../../components/profile'




const ContentContainer = ({
    email,
    name,
    userId,
    phone_number,
    department,
    role,
    SET_USER
}) => {
    /**
        * @description redux 유저 정보 초기세팅
        */
    const [userProfile, setUserProfile] = useState({
        email: email,
        name: name,
        userId: userId,
        phone_number: phone_number,
        department: department,
        role: role,
        password: ""
    })
    console.log(userProfile.name)
    // SECTION UserCard

    // !SECTION UserCard




    // SECTION UserInfo
    /**
     *  @description 프로필수정 FUNCTION
     */
    let editUserProfileFunctions = {
        email: (e) => {
            return setUserProfile((state) => ({ ...state, email: e.target.value }))
        },
        phone_number: (e) => {
            return setUserProfile((state) => ({ ...state, phone_number: e.target.value }))
        },
        password: (e) => {
            return setUserProfile((state) => ({ ...state, password: e.target.value }))
        },
    }
    /**
       *  @description 프로필수정완료시 redux update
       */
    let updateUserProfileRedux = {
        email: () => {
            return SET_USER({ email: userProfile.email })
        },
        phone_number: () => {
            return SET_USER({ phone_number: userProfile.phone_number })
        },
        password: () => {
            return SET_USER({ password: userProfile.password })
        },
    }
    let emailOncick = () => {
        //통신 
        //.then(리덕스 값 바꿔주기)
    }

    // !SECTION UserInfo


    console.log(userProfile)
    return (
        <>
            <ProfileContent
                userProfile={userProfile}
                editUserProfileFunctions={editUserProfileFunctions}

            ></ProfileContent>
        </>
    )
}

export default ContentContainer