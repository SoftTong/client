import React from "react";
import "../../css/profile.css";
import "../../css/bootstrap.min.css";
import UserCard from "../../containers/redux/components/usercard";
import UserInfo from "./UserInfo";

const profileContent = ({
  userProfile,
  editUserProfileFunctions
}) => {
  console.log(userProfile)
  return (
    <>
      <div className="container">
        <div class="row align-items-stretch overlap">
          <UserCard ></UserCard>
          <UserInfo userProfile={userProfile} editUserProfileFunctions={editUserProfileFunctions}></UserInfo>
        </div>
      </div>
    </>
  );
};

export default profileContent;
