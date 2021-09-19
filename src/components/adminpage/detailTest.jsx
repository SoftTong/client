import { React, useState } from "react";
import Modal from "../../components/atoms/Modal";

const Test = ({ detailNoticeData }) => {
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

        <button className="sub-button detail-button">돌아가기</button>
      </div>
    </div>
  );
};

export default Test;
