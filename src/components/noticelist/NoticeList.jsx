import React from "react";
import ManageTable from "./ManageTable";
import seachicon from "../../img/seachicon.png";

const NoticeList = () => {
  return (
    <div className="col-lg-9">
      <div className="section-title">
        <p>프로그램 신청</p>
      </div>
      <div className="box h-100">
        <div className="d-flex align-items-center">
          <div className="section">
            <ManageTable />
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
              <img src={seachicon} width="20px" height="20px"></img>
            </span>
          </div>
        </div>
        <div className="pagination">
          <ul>
            <li>
              <a>1</a>
            </li>
            <li>
              <a>2</a>
            </li>
            <li>
              <a>3</a>
            </li>
            <li>
              <a>4</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NoticeList;
