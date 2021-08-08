import React from "react";
import { Link } from "react-router-dom";
import ProfileImg from "../../img/profile.png";

const UserCard = ({ userProfile }) => {
  console.log(userProfile);
  return (
    <div className="col-lg-3">
      <div className="box small h-80">
        <div className="d-flex align-items-center mb-2 card mycard">
          <img src={ProfileImg} className="img-fluid mycard-img" alt="Imagee" />

          <div className="text">
            <h3>{userProfile.userId}</h3>
            <h2>{userProfile.name}</h2>
          </div>
          <div className="role">
            <span className="category">
              학생
            </span>
            <span className="category">
              튜터
            </span>
            <span className="category">
              연구실인턴십
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
