import React from "react";

const UserCard = () => {
  return (
    <div class="col-lg-3">
      <div class="box small h-80">
        <div class="d-flex align-items-center mb-2 card mycard">
          <img
            src="images/img_2.jpg"
            class="img-fluid mycard-img"
            alt="Image"
          />

          <div class="text">
            <h3>2018038066</h3>
            <h2>박지현</h2>
          </div>
          <div class="role">
            <a href="#" class="category">
              학생
            </a>
            <a href="#" class="category">
              튜터
            </a>
            <a href="#" class="category">
              연구실인턴십
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
