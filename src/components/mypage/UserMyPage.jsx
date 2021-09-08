//NOTE MyPage USER CONTENT

import React from "react";
// import styled from "styled-components";
import ManageTable from "./ManageTable";

const UserMyPage = (props) => {
  console.log("=====");
  console.log(props.applyPageinationNum);
  return (
    <>
      <div className="col-lg-12">
        <div className="section-title">
          <p>프로그램 신청 목록</p>
        </div>
        <div className="box h-100">
          <div className="d-flex align-items-center">
            <div className="section">
              <ManageTable
                applyPageList={props.applyPageList}
                isDetailVisible={props.isDetailVisible}
                detailHandling={props.detailHandling}
                applyPageinationNum={props.applyPageinationNum}
                applyDetailOnclick={props.applyDetailOnclick}
                applyDetailData={props.applyDetailData}
                paginationOnclick={props.paginationOnclick}
              />
            </div>
          </div>

          <div className="pagination">
            <ul>
              {props.applyPageinationNum &&
                props.applyPageinationNum.map((i, index) => {
                  return (
                    <li key={index} onClick={props.paginationOnclick}>
                      {props.applyPageinationNum[index]}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserMyPage;
