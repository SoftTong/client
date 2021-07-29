import React from "react";
import "../../css/profile.css";
import "../../css/bootstrap.min.css";
import UserCard from "./UserCard";
import UserInfo from "./UserInfo";

const profileContent = () => {
  return (
    <>
      <div className="container">
        <div class="row align-items-stretch overlap">
          <UserCard></UserCard>
          <UserInfo></UserInfo>
        </div>
      </div>
    </>
  );
};

export default profileContent;
