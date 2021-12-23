//NOTE HOME CONTENT
import React from "react";
import HomeProfile from "./homeProfile";
import HomeRole from "./homeRole";
import HomeLink from "./homeLink";
import HomeNotice from "./homeNotice";
import HomeApply from "./homeApply";

import { Row, Col, Button, Tooltip } from "antd";

const HomeContent = (props) => {
  return (
    <>
      <Row style={{ height: "200px", marginTop: "10px", marginBottom: "10px" }}>
        <Col span={8}>
          <div
            style={{
              backgroundColor: "white",
              borderTop: "#8B4513 4px solid",
              width: "auto",
              height: "100%",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            <HomeProfile userInfo={props.userInfo} />
          </div>
        </Col>
        <Col span={8}>
          <div
            style={{
              backgroundColor: "white",
              borderTop: "#6B8E23 4px solid",
              width: "auto",
              height: "100%",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            <HomeRole userInfo={props.userInfo} />
          </div>
        </Col>
        <Col span={8}>
          <div
            style={{
              backgroundColor: "white",
              borderTop: "#008080 4px solid",
              width: "auto",
              height: "100%",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            <HomeLink userInfo={props.userInfo} />
          </div>
        </Col>
      </Row>
      <Row style={{ height: "400px", marginTop: "10px", marginBottom: "10px" }}>
        <Col span={12}>
          <div
            style={{
              backgroundColor: "white",
              borderTop: "#483D8B 4px solid",
              width: "auto",
              height: "100%",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            <HomeNotice pageList={props.pageList} />
          </div>
        </Col>
        <Col span={12}>
          <div
            style={{
              backgroundColor: "white",
              borderTop: "#708090 4px solid",
              width: "auto",
              height: "100%",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            {" "}
            <HomeApply applyPageList={props.applyPageList} />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default HomeContent;
