import React from "react";

const HomeRole = ({ userInfo }) => {
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
          <strong>{userInfo.name}</strong>님은 현재
        </h5>
      </div>
      <div
        style={{ padding: "30px", display: "grid", justifyContent: "center" }}
      >
        <div
          style={{
            borderRadius: "10px",
            border: "solid black 2px",
            padding: "5px",
            justifyContent: "center",
            display: "flex",
            backgroundColor: "#FAF0E6",
          }}
        >
          <strong>튜터</strong>
        </div>
        <br></br>
        <div
          style={{
            borderRadius: "10px",
            border: "solid black 2px",
            padding: "5px",
            justifyContent: "center",
            display: "flex",
            backgroundColor: "#F0F8FF",
          }}
        >
          <strong>연구실 인턴십</strong>
        </div>
      </div>
    </>
  );
};

export default HomeRole;
