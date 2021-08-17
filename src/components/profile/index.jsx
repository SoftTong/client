import React from "react";
import "../../css/profile.css";
import "../../css/bootstrap.min.css";
import UserCard from "../../containers/redux/components/usercard";
import UserInfo from "./UserInfo";

const profileContent = ({
  userProfile,
  editUserProfileFunctions,
  showEmail,
  editEmailOnclick,
  editPhoneOnclick,
  showPhone,
  showPassword,
  editPasswordOnclick,
}) => {
  console.log(userProfile)
  return (
    <>
      <div className="container">
        <div class="row align-items-stretch overlap">
          <UserCard ></UserCard>
          <UserInfo userProfile={userProfile}
            editUserProfileFunctions={editUserProfileFunctions}
            showEmail={showEmail}
            editEmailOnclick={editEmailOnclick}
            showPhone={showPhone}
            editPhoneOnclick={editPhoneOnclick}
            showPassword={showPassword}
            editPasswordOnclick={editPasswordOnclick}></UserInfo>
        </div>
      </div>
    </>
  );
};

export default profileContent;
