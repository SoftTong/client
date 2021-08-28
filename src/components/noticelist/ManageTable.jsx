import React from "react";

const ManageTable = ({
  pageList,
  noticeDetailOnclick,
  seachWord,
  handleChangeWord,
}) => {
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

        {pageList
          .filter(
            (
              { id, number, title, adminName, uploadDay, tag1, tag2, tag3 },
              index
            ) => {
              if (seachWord === null) {
                return (
                  { id, number, title, adminName, uploadDay, tag1, tag2, tag3 },
                  index
                );
              } else if (
                title.toLowerCase().includes(seachWord.toLowerCase())
              ) {
                return (
                  { id, number, title, adminName, uploadDay, tag1, tag2, tag3 },
                  index
                );
              }
            }
          )
          .map(
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
                      {tag1 ? (
                        <span className="tagcategory">{tag1}</span>
                      ) : null}
                      {tag2 ? (
                        <span className="tagcategory">{tag2}</span>
                      ) : null}
                      {tag3 ? (
                        <span className="tagcategory">{tag3}</span>
                      ) : null}
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
