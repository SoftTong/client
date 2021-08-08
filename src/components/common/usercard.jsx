import React from "react";
import { Link } from "react-router-dom";
import ProfileImg from "../../img/profile.png";


const UserCard = ({ userId, name }) => {
    return (
        <div className="col-lg-3">
            <div className="box small h-80">
                <div className="d-flex align-items-center mb-2 card mycard">
                    <img src={ProfileImg} className="img-fluid mycard-img" alt="Imagee" />

                    <div className="text">
                        <h3>{userId}</h3>
                        <h2>{name}</h2>
                    </div>
                    <div className="role">
                        <div className="category">
                            학생
                        </div>
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
