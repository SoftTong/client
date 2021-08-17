import React from "react";
import ManageTable from "./ManageTable";
import { FaSistrix } from "react-icons/fa";

const NoticeList = ({
  pageList,
  isDetailVisible,
  detailHandling,
  paginationNum,
}) => {
  console.log("paginationNum");
  console.log(paginationNum);
  return (
    <div className="col-lg-12">
      <div className="section-title">
        <p>프로그램 신청</p>
      </div>
      <div className="box">
        <div className="d-flex align-items-center">
          <div className="section">
            <ManageTable pageList={pageList} />
          </div>
        </div>
        <div className="seachbar">
          <select>
            <option>제목</option>
            <option>작성자</option>
            <option>태그</option>
          </select>
          <div className="seachtext">
            <input type="seach" placeholder="검색할 내용을 입력하세요"></input>
            <span>
              <FaSistrix></FaSistrix>
            </span>
          </div>
        </div>
        <div className="pagination">
          <ul>
            {paginationNum.map((i, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    console.log("dd");
                  }}
                >
                  {paginationNum[index]}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NoticeList;
