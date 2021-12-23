import React from "react";

const homeNotice = ({ pageList }) => {
  const pageListArr = pageList.slice(0, 3);

  return (
    <div className="box h-100">
      <table className="tabel-list">
        <thead className="table-head py-3 px-4 d-none d-lg-block bg-light">
          <tr className="row align-items-sm-center text-center text-dark">
            <th className="col-sm-6">제목</th>
            <th className="col-sm-3">작성자</th>
            <th className="col-sm-3">작성일</th>
          </tr>
        </thead>

        {pageListArr.map(
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
                <td
                  id={number}
                  className="col-sm-6 thtitle"
                  onClick={() => {
                    document.location.href = "/notice";
                  }}
                >
                  {title}
                  <div className="tag">
                    {tag1 ? <span className="tagcategory">{tag1}</span> : null}
                    {tag2 ? <span className="tagcategory">{tag2}</span> : null}
                    {tag3 ? <span className="tagcategory">{tag3}</span> : null}
                  </div>
                </td>
                <td id={number} className="col-sm-3">
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

      {/* {detailNoticeData.id === Number(id) ? (
          <DetailTest
            detailNoticeData={detailNoticeData}
            uploadOnclick={uploadOnclick}
            submitFormOnclick={submitFormOnclick}
            uploadfile={uploadfile}
            selectFile={selectFile}
            listback={listback}
            submitForm={submitForm}
            answerArr={answerArr}
          ></DetailTest>
        ) : (
          <>
            <div className="d-flex align-items-center">
              <div className="section">
                <ManageTable
                  pageList={pageList}
                  noticeDetailOnclick={noticeDetailOnclick}
                  searchWord={searchWord}
                  handleChangeWord={handleChangeWord}
                  noticeListLikeHandler={noticeListLikeHandler}
                  islike={islike}
                />
              </div>
            </div>
          </>
        )} */}
    </div>
  );
};

export default homeNotice;
