import React, { useState } from "react";
import ProfileContent from "../../../components/profile";
import patchUserInfo from "../../../service/api/patch/patch_userInfo";

const ContentContainer = ({
  email,
  name,
  userId,
  phone_number,
  department,
  role,
  SET_USER,
}) => {
  console.log(email);
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
    password: "",
  });
  console.log(userProfile.name);
  // SECTION UserCard

  // !SECTION UserCard

  // SECTION UserInfo
  /**
   *  @description 프로필수정 FUNCTION
   */
  let editUserProfileFunctions = {
    email: (e) => {
      return setUserProfile((state) => ({ ...state, email: e.target.value }));
    },
    phone_number: (e) => {
      return setUserProfile((state) => ({
        ...state,
        phone_number: e.target.value,
      }));
    },
    password: (e) => {
      return setUserProfile((state) => ({
        ...state,
        password: e.target.value,
      }));
    },
  };
  /**
   *  @description 프로필수정완료시 redux update
   */
  let updateUserProfileRedux = {
    email: () => {
      return SET_USER({ email: userProfile.email });
    },
    phone_number: () => {
      return SET_USER({ phone_number: userProfile.phone_number });
    },
    password: () => {
      return SET_USER({ password: userProfile.password });
    },
  };

  /**
   * @description 이메일 변경 onClick Event
   * @function editEmailOnclick
   * @btnValue 이메일 수정 / 저장
   * @detail 저장시 - patchUserInfo ok->redux 수정  */

  const [showEmail, setShowEmail] = useState(false);

  const editEmailOnclick = () => {
    if (showEmail === false) {
      console.log("수정");
      return setShowEmail(true);
    } else {
      return (
        email === userProfile.email
          ? console.log("바뀐게없음")
          : patchUserInfo(JSON.stringify({ email: userProfile.email }))
            .then((res) => {
              console.log(res);
              updateUserProfileRedux.email();
            })
            .catch((err) => {
              console.log(err);
              setUserProfile((state) => ({ ...state, email: email }));
            }),
        setShowEmail(false)
      );
    }
  };

  /**
   * @description 핸드폰번호 변경 onClick Event
   * @function editPhoneOnclick
   * @btnValue 핸드폰번호 수정 / 저장
   * @detail 저장시 - patchUserInfo ok->redux 수정  */

  const [showPhone, setShowPhone] = useState(false);

  const editPhoneOnclick = () => {
    if (showPhone === false) {
      console.log("수정");
      return setShowPhone(true);
    } else {
      return (
        phone_number === userProfile.phone_number
          ? console.log("바뀐게없음")
          : patchUserInfo(
            JSON.stringify({ phoneNumber: userProfile.phone_number })
          )
            .then((res) => {
              console.log(res);
              updateUserProfileRedux.phone_number();
            })
            .catch((err) => {
              console.log(err);
              setUserProfile((state) => ({
                ...state,
                phone_number: phone_number,
              }));
            }),
        setShowPhone(false)
      );
    }
  };

  /**
   * @description 비밀번호 변경 onClick Event
   * @function editPasswordOnclick
   * @btnValue 비밀번호 수정 / 저장 */

  const [showPassword, setShowPassword] = useState(false);

  const editPasswordOnclick = () => {
    if (showPassword === false) {
      console.log("수정");
      return setShowPassword(true);
    } else {
      patchUserInfo(JSON.stringify({ password: userProfile.password }))
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      setUserProfile((state) => ({ ...state, password: "" }));
      setShowPassword(false);
    }
  };

  // !SECTION UserInfo

  console.log(userProfile);
  return (
    <>
      <ProfileContent
        userProfile={userProfile}
        editUserProfileFunctions={editUserProfileFunctions}
        showEmail={showEmail}
        editEmailOnclick={editEmailOnclick}
        showPhone={showPhone}
        editPhoneOnclick={editPhoneOnclick}
        showPassword={showPassword}
        editPasswordOnclick={editPasswordOnclick}
      ></ProfileContent>
    </>
  );
};

export default ContentContainer;
