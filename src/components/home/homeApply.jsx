import React from "react";

const homeApply = ({ applyPageList }) => {
  const applyPageListArr = applyPageList.slice(0, 4);
  return (
    <>
      <div className="box h-100">
        <div className="d-flex align-items-center">
          <div className="section">
            <table className="tabel-list">
              <thead className="table-head py-3 px-4 d-none d-lg-block bg-light">
                <tr className="row align-items-sm-center text-center text-dark">
                  <th className="col-sm-7">프로그램명</th>
                  <th className="col-sm-3">신청날짜</th>
                  <th className="col-sm-2">상태</th>
                </tr>
              </thead>

              {applyPageListArr.map(
                ({ id, number, title, status, uploadDay, dtype }, index) => (
                  <tbody
                    key={index}
                    onClick={() => {
                      document.location.href = "/mypage";
                    }}
                    className="table-content py-3 px-4 notice-wrapper row align-items-sm-center text-center text-dark important"
                    style={{ cursor: "pointer" }}
                  >
                    <tr>
                      <td id={number} className="col-sm-7 thtitle">
                        {title}
                      </td>
                      <td id={number} className="col-sm-3">
                        {uploadDay}
                      </td>
                      <td id={number} className="col-sm-2">
                        <button>
                          <p className="applystatus">{status}</p>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                )
              )}
            </table>
          </div>
        </div>
        {/* {props.applyDetailData.id === Number(id) ? (
          <DetailTest
            filePath={props.filePath}
            applyPageList={props.applyPageList}
            applyIsDetailVisible={props.applyIsDetailVisible}
            applydetailHandling={props.applydetailHandling}
            applyDetailData={props.applyDetailData}
            fileDownload={props.fileDownload}
            applyDetailDataId={props.applyDetailData.id}
          ></DetailTest>
        ) : (
          <>
            <div className="d-flex align-items-center">
              <div className="section">
                <ManageTable
                  applyPageList={props.applyPageList}
                  applyPageinationNum={props.applyPageinationNum}
                  applyDetailOnclick={props.applyDetailOnclick}
                  applyDetailData={props.applyDetailData}
                  paginationOnclick={props.paginationOnclick}
                />
              </div>
            </div>
          </>
        )} */}
      </div>
    </>
  );
};

export default homeApply;
