import React from "react";

const ManageTable = ({
  applypageList,
  isDetailVisible,
  detailHandling,
  paginationNum,
  noticeDetailOnclick,
  detailNoticeData,
  paginationOnclick,
}) => {
  return (
    <>
      <table className="tabel-list">
        <thead className="table-head py-3 px-4 d-none d-lg-block bg-light">
          <tr className="row align-items-sm-center text-center text-dark">
            <th className="col-sm-7">프로그램명</th>
            <th className="col-sm-2">신청날짜</th>
            <th className="col-sm-3">상태</th>
          </tr>
        </thead>

        {applypageList.applypageList.map(
          ({ id, number, title, status, uploadDay }, index) => (
            <tbody
              key={index}
              onClick={() => {
                noticeDetailOnclick(id);
              }}
              className="table-content py-3 px-4 notice-wrapper row align-items-sm-center text-center text-dark important"
            >
              <tr>
                <td id={number} className="col-sm-7 thtitle">
                  {title}
                </td>
                <td id={number} className="col-sm-2">
                  {uploadDay}
                </td>
                <td id={number} className="col-sm-3">
                  <p className="applystatus">{status}</p>
                </td>
              </tr>
            </tbody>
          )
        )}
      </table>
    </>
  );
};

export default ManageTable;
