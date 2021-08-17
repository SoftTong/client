import React from "react";
import ManageTable from "./ManageTable";
import seachicon from "../../img/seachicon.png";
import { Link } from "react-router-dom";
import { FaSistrix } from "react-icons/fa";

const NoticeList = ({ pageList }) => {
  return (
    <div className="col-lg-9">
      <div className="section-title">
        <p>프로그램 신청</p>
      </div>
      <div className="box h-100">
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
            <li>
              <Link to="#" className="linkpage">
                1
              </Link>
            </li>
            <li>
              <Link to="#" className="linkpage">
                2
              </Link>
            </li>
            <li>
              <Link to="#" className="linkpage">
                3
              </Link>
            </li>
            <li>
              <Link to="#" className="linkpage">
                4
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NoticeList;
