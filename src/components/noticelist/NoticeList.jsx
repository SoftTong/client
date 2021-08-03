import React from "react";
import ManageTable from "./ManageTable";

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
      </div>
    </div>
  );
};

export default NoticeList;
