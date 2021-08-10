import React from "react";

const ManageTable = ({ pageList }) => {
  return (
    <>
      <table className="tabel-list">
        <thead className="table-head py-3 px-4 d-none d-lg-block bg-light">
          <tr className="row align-items-sm-center text-center text-dark">
            <th className="col-sm-7">제목</th>
            <th className="col-sm-2">작성자</th>
            <th className="col-sm-3">작성일</th>
          </tr>
        </thead>

        {pageList.map(
          ({ number, title, adminName, uploadDay, tag1, tag2, tag3 }) => (
            <tbody className="table-content py-3 px-4 notice-wrapper row align-items-sm-center text-center text-dark important">
              <tr>
                <td id={number} className="col-sm-7">
                  {title}
                  <div className="tag">
                    {tag1 ? <span className="tagcategory">{tag1}</span> : null}
                    {tag2 ? <span className="tagcategory">{tag2}</span> : null}
                    {tag3 ? <span className="tagcategory">{tag3}</span> : null}
                  </div>
                </td>
                <td id={number} className="col-sm-2">
                  {adminName}
                </td>
                <td id={number} className="col-sm-3">
                  {uploadDay}
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
