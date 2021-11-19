import { React, useState } from "react";
import Modal from "../../components/atoms/Modal";

const Test = ({
  detailNoticeData,
  uploadOnclick,
  uploadfile,
  selectFile,
  listback,
}) => {
  console.log("DetailTest");
  console.log(detailNoticeData);

  const [submitModal, setSubmitModal] = useState(false);
  const handleSubmitModal = {
    show: () => setSubmitModal(true),
    close: () => {
      setSubmitModal(false);
    },
  };
  const [formModal, setFormModal] = useState(false);
  const handleFormModal = {
    show: () => setFormModal(true),
    close: () => {
      setFormModal(false);
    },
  };

  // const uploadForm = document.getElementById("js-upload-form");

  // const uploadFiles = document.getElementById("js-upload-files").files;

  return (
    <div className="box">
      <div className="align-items-center">
        <h2>{detailNoticeData.title}</h2>

        {detailNoticeData.tag1 ? (
          <span className="tagcategory detailtag">{detailNoticeData.tag1}</span>
        ) : null}
        {detailNoticeData.tag2 ? (
          <span className="tagcategory detailtag">{detailNoticeData.tag2}</span>
        ) : null}
        {detailNoticeData.tag3 ? (
          <span className="tagcategory detailtag">{detailNoticeData.tag3}</span>
        ) : null}
        <div className="date">
          <p>작성일 : {detailNoticeData.startDay}</p>
          <p>마감일 : {detailNoticeData.destDay}</p>
        </div>

        <hr></hr>
        <div className="section">
          <iframe
            src={detailNoticeData.swurl}
            width="100%"
            height="650px"
          ></iframe>
        </div>
      </div>

      <div className="buttonsection">
        {detailNoticeData.isForm === true ? (
          <div>
            <button
              className="sub-button detail-button"
              onClick={handleFormModal.show}
            >
              신청서 작성하기
            </button>
            <Modal
              closable={true}
              title={"신청서 작성하기"}
              visible={formModal}
              maskClosable={true}
              onClose={handleFormModal.close}
            >
              <div className="uploadsection" style={{ overflow: "scroll" }}>
                <div className="detail">
                  <p>이름</p>
                  <input type="text"></input>
                </div>
                <div className="detail">
                  <p>학과</p>
                  <div className="radiobtn">
                    <input type="radio" name="major" />
                    소프트웨어학과
                  </div>
                  <div className="radiobtn">
                    <input type="radio" name="major" />
                    정보통신공학부
                  </div>
                  <div className="radiobtn">
                    <input type="radio" name="major" />
                    컴퓨터공학과
                  </div>
                </div>
                <div className="detail">
                  <p>학년</p>
                  <div className="radiobtn">
                    <input type="radio" name="grade" />
                    1학년
                  </div>
                  <div className="radiobtn">
                    <input type="radio" name="grade" />
                    2학년
                  </div>
                  <div className="radiobtn">
                    <input type="radio" name="grade" />
                    3학년
                  </div>
                  <div className="radiobtn">
                    <input type="radio" name="grade" />
                    4학년
                  </div>
                </div>
                <div className="detail">
                  <p>학번</p>
                  <input type="text"></input>
                </div>
                <div className="detail">
                  <p>연락처</p>
                  <input type="text"></input>
                </div>
              </div>
            </Modal>
          </div>
        ) : (
          <div>
            <button
              className="sub-button detail-button"
              onClick={handleSubmitModal.show}
            >
              첨부파일 제출하기
            </button>
            <Modal
              closable={true}
              title={"첨부파일 제출하기"}
              visible={submitModal}
              maskClosable={true}
              onClose={handleSubmitModal.close}
            >
              <div id="js-upload-form">
                <div className="form-inline">
                  <div className="form-group">
                    <input
                      type="file"
                      name="file"
                      id="js-upload-files"
                      multiple
                      onChange={selectFile}
                    ></input>
                  </div>
                  <button
                    className="btn btn-sm btn-primary"
                    id="js-upload-submit"
                    onClick={uploadOnclick}
                  >
                    Upload files
                  </button>
                </div>
              </div>
            </Modal>
          </div>
        )}

        <button className="sub-button detail-button" onClick={listback}>
          돌아가기
        </button>
      </div>
    </div>
  );
};

export default Test;
