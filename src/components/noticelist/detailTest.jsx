import { React, useState, useEffect } from "react";
import Modal from "../../components/atoms/Modal";

const Test = ({
  detailNoticeData,
  uploadOnclick,
  submitFormOnclick,
  uploadfile,
  selectFile,
  listback,
  submitForm,
  answerArr,
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

  const str = detailNoticeData.description;
  console.log(str);
  let arr = [];
  if (str) {
    arr = str.split("$$$");
  }
  console.log(arr);
  console.log(arr.length);

  const handleFormModal = {
    show: () => {
      setFormModal(true);
      // const str = detailNoticeData.description;
      // console.log(str);
      // const arr2 = str.split("$$$");
      // for (let i = 0; i < arr2.length; i++) {
      //   arr[i] = arr2[i];
      // }
      // console.log(arr);
      // console.log(arr.length);
    },
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
              style={{ width: "200px", height: "200px", overflow: "scroll" }}
            >
              <div className="uploadsection">
                {arr.map((i, index) => {
                  return (
                    <div key={index}>
                      <p>{arr[index]}</p>
                      <input
                        type="text"
                        name={index}
                        // value={answerArr[index]}
                        onChange={(e) => submitForm(e, index)}
                      ></input>
                    </div>
                  );
                })}
              </div>

              <button
                className="sub-button detail-button"
                style={{ justifyContent: "center" }}
                onClick={submitFormOnclick}
              >
                신청서 제출하기
              </button>
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
