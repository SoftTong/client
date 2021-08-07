import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ userProfile }) => {
  console.log(userProfile)
  return (
    <div className="col-lg-3">
      <div className="box small h-80">
        <div className="d-flex align-items-center mb-2 card mycard">
          <image
            src="images/img_2.jpg"
            className="img-fluid mycard-img"
            alt="Image"
          />

          <div className="text">
            <h3>{userProfile.userId}</h3>
            <h2>{userProfile.name}</h2>
          </div>
          <div className="role">
            <Link to="#" className="category">
              학생
            </Link>
            <Link to="#" className="category">
              튜터
            </Link>
            <Link to="#" className="category">
              연구실인턴십
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
