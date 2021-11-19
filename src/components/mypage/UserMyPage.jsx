//NOTE MyPage USER CONTENT

import React from "react";
// import styled from "styled-components";
import ManageTable from "./ManageTable";
import DetailTest from "./detailTest";
import { useParams } from "react-router-dom";

const UserMyPage = (props) => {
  const { id, title } = useParams();
  console.log("=====");
  console.log(props.applyPageinationNum);

  return (
    <>
      <div className="section-title">
        <p>프로그램 신청 목록</p>
      </div>
      <div className="box h-100">
        {props.applyDetailData.id === Number(id) ? (
          <DetailTest
            filePath={props.filePath}
            applyPageList={props.applyPageList}
            applyIsDetailVisible={props.applyIsDetailVisible}
            applydetailHandling={props.applydetailHandling}
            applyDetailData={props.applyDetailData}
            fileDownload={props.fileDownload}
            applyDetailDataId={props.applyDetailData.id}
          ></DetailTest>
        ) : (
          <>
            <div className="d-flex align-items-center">
              <div className="section">
                <ManageTable
                  applyPageList={props.applyPageList}
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
          </>
        )}
      </div>
    </>
  );
};

export default UserMyPage;
