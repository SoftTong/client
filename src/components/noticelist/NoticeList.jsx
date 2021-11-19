import ManageTable from "./ManageTable";
import { FaSistrix } from "react-icons/fa";
import DetailTest from "./detailTest";

import { useParams, useHistory } from "react-router-dom";

const NoticeList = ({
  pageList,
  paginationNum,
  noticeDetailOnclick,
  detailNoticeData,
  paginationOnclick,
  uploadOnclick,
  uploadfile,
  selectFile,
  searchWord,
  handleChangeWord,
  listback,
  noticeListLikeHandler,
  islike,
}) => {
  const history = useHistory();

  const { id } = useParams();
  console.log(useParams());
  console.log(detailNoticeData.id);
  console.log(detailNoticeData.id === Number(id));
  return (
    <div className="col-lg-12">
      <div
        className="section-title"
        style={{
          cursor: "pointer",
        }}
        onClick={() => {
          history.push("/notice");
        }}
      >
        <p>공지 사항</p>
      </div>
      <div className="box h-100">
        {detailNoticeData.id === Number(id) ? (
          <DetailTest
            detailNoticeData={detailNoticeData}
            uploadOnclick={uploadOnclick}
            uploadOnclick={uploadOnclick}
            uploadfile={uploadfile}
            selectFile={selectFile}
            listback={listback}
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
            <div className="searchbar">
              <select>
                <option>제목</option>
                <option>작성자</option>
                <option>태그</option>
              </select>
              <div className="searchtext">
                <input
                  type="search"
                  placeholder="검색할 내용을 입력하세요"
                  value={searchWord}
                  onChange={handleChangeWord}
                ></input>

                <span>
                  <FaSistrix></FaSistrix>
                </span>
              </div>
            </div>
            <div className="pagination">
              <ul>
                {paginationNum.map((i, index) => {
                  return (
                    <li key={index} onClick={paginationOnclick}>
                      {paginationNum[index]}
                    </li>
                  );
                })}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NoticeList;
