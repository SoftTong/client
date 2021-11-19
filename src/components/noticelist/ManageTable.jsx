import React from "react";
import { PushpinOutlined, PushpinFilled } from "@ant-design/icons";

const ManageTable = ({
  pageList,
  noticeDetailOnclick,
  searchWord,
  handleChangeWord,
  noticeListLikeHandler,
  islike,
}) => {
  return (
    <>
      <table className="tabel-list">
        <thead className="table-head py-3 px-4 d-none d-lg-block bg-light">
          <tr className="row align-items-sm-center text-center text-dark">
            <th className="col-sm-1"></th>
            <th className="col-sm-6">제목</th>
            <th className="col-sm-2">작성자</th>
            <th className="col-sm-3">작성일</th>
          </tr>
        </thead>

        {pageList.map(
          (
            { id, number, title, adminName, uploadDay, tag1, tag2, tag3 },
            index
          ) => (
            <tbody
              key={index}
              className="table-content py-3 px-4 notice-wrapper row align-items-sm-center text-center text-dark important"
              style={{ cursor: "pointer" }}
            >
              <tr>
                <td id={number} className="col-sm-1">
                  {islike ? (
                    <PushpinFilled onClick={noticeListLikeHandler} />
                  ) : (
                    <PushpinOutlined onClick={noticeListLikeHandler} />
                  )}
                </td>
                <td
                  id={number}
                  className="col-sm-6 thtitle"
                  onClick={() => {
                    noticeDetailOnclick(id);
                  }}
                >
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
