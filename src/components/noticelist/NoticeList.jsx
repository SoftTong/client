import ManageTable from "./ManageTable";
import { FaSistrix } from "react-icons/fa";

import DetailTest from "./detailTest";

const NoticeList = ({
  pageList,
  isDetailVisible,
  detailHandling,
  paginationNum,
  noticeDetailOnclick,
  detailNoticeData,
  paginationOnclick,
  uploadOnclick,
  uploadfile,
  selectFile,
  seachWord,
  handleChangeWord,
}) => {
  return (
    <div className="col-lg-12">
      <div className="section-title">
        <p
          onClick={() => {
            detailHandling.close();
          }}
        >
          공지 사항
        </p>
      </div>
      <div className="box h-100">
        {isDetailVisible ? (
          <DetailTest
            detailNoticeData={detailNoticeData}
            uploadOnclick={uploadOnclick}
            uploadOnclick={uploadOnclick}
            uploadfile={uploadfile}
            selectFile={selectFile}
          ></DetailTest>
        ) : (
          <>
            <div className="d-flex align-items-center">
              <div className="section">
                <ManageTable
                  pageList={pageList}
                  noticeDetailOnclick={noticeDetailOnclick}
                  seachWord={seachWord}
                  handleChangeWord={handleChangeWord}
                />
              </div>
            </div>
            <div className="seachbar">
              <select>
                <option>제목</option>
                <option>작성자</option>
                <option>태그</option>
              </select>
              <div className="seachtext">
                <input
                  type="seach"
                  placeholder="검색할 내용을 입력하세요"
                  value={seachWord}
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
