import React from "react";

const homeProfile = ({ userInfo }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "30px",
        }}
      >
        <h5>
          <strong>{userInfo.name}</strong>님 환영합니다
        </h5>
      </div>
      <div style={{ padding: "30px", marginLeft: "40px" }}>
        <h6>
          학번{"   "}|{"   "}
          {userInfo.id}
        </h6>
        <br></br>
        <h6>
          학과{"   "}|{"   "}
          {userInfo.department}
        </h6>
      </div>
    </>
  );
};

export default homeProfile;
