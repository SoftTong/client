import React from "react";

const ManageTable = ({}) => {
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

        {/* {pageList.map(
          (
            { id, number, title, adminName, uploadDay, tag1, tag2, tag3 },
            index
          ) => (
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
                  <div className="tag">
                    {tag1 ? <span className="tagcategory">{tag1}</span> : null}
                    {tag2 ? <span className="tagcategory">{tag2}</span> : null}
                    {tag3 ? <span className="tagcategory">{tag3}</span> : null}
                  </div>
                </td>
                <td id={number} className="col-sm-2">
                  {}
                </td>
                <td id={number} className="col-sm-3">
                  {}
                </td>
              </tr>
            </tbody>
          )
        )} */}
      </table>
    </>
  );
};

export default ManageTable;
