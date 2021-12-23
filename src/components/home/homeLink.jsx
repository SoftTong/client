import React from "react";
import { Row, Col } from "antd";
import school from "../../img/school.png";
import department from "../../img/department.png";
const homeLink = ({ userInfo }) => {
  const GoLink = () => {
    if (userInfo.department == "소프트웨어학과") {
      document.location.href = "https://software.cbnu.ac.kr/";
    } else if (userInfo.department == "정보통신학부") {
      document.location.href = "https://inform.chungbuk.ac.kr/";
    } else if (userInfo.department == "컴퓨터공학과") {
      document.location.href = "https://computer.chungbuk.ac.kr/";
    } else {
      alert("해당 서비스가 준비 중입니다.");
    }
  };
  return (
    <div style={{ height: "100%" }}>
      <Row style={{ height: "100%" }}>
        <Col span={12} style={{ cursor: "pointer" }} onClick={GoLink}>
          <img src={school} className="img-fluid mycard-img" alt="Image" />
          <div style={{ justifyContent: "center", display: "grid" }}>
            <p style={{ margin: "0px" }}>
              <strong>{userInfo.department}</strong>
            </p>
            <p style={{ margin: "0px" }}>홈페이지로 이동</p>
          </div>
        </Col>
        <Col
          span={12}
          style={{ cursor: "pointer" }}
          onClick={() => {
            document.location.href = "https://sw7up.cbnu.ac.kr/home";
          }}
        >
          <img src={department} className="img-fluid mycard-img" alt="Image" />
          <div style={{ justifyContent: "center", display: "grid" }}>
            <p style={{ margin: "0px" }}>
              <strong>SW 중심사업단</strong>
            </p>
            <p style={{ margin: "0px" }}>홈페이지로 이동</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default homeLink;
