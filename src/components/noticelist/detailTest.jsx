import React from "react";

const Test = ({ detailNoticeData }) => {
  console.log("DetailTest");
  console.log(detailNoticeData);

  //   var dropZone = document.getElementById("drop-zone");

  //   var uploadForm = document.getElementById("js-upload-form");

  //   var startUpload = function (files) {
  //     console.log(files);
  //   };

  //   window.onload = function () {
  //     uploadForm.addEventListener("submit", function (e) {
  //       var uploadFiles = document.getElementById("js-upload-files").files;
  //       e.preventDefault();

  //       startUpload(uploadFiles);
  //     });

  //     dropZone.ondrop = function (e) {
  //       e.preventDefault();
  //       this.className = "upload-drop-zone";

  //       startUpload(e.dataTransfer.files);
  //     };

  //     dropZone.ondragover = function () {
  //       this.className = "upload-drop-zone drop";
  //       return false;
  //     };

  //     dropZone.ondragleave = function () {
  //       this.className = "upload-drop-zone";
  //       return false;
  //     };
  //   };

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
        <div className="uploadsection">
          <form
            action=""
            method="post"
            enctype="multipart/form-data"
            id="js-upload-form"
          >
            <div className="form-inline">
              <div className="form-group">
                <input
                  type="file"
                  name="files[]"
                  id="js-upload-files"
                  multiple
                ></input>
              </div>
              <button
                type="submit"
                className="btn btn-sm btn-primary"
                id="js-upload-submit"
              >
                Upload files
              </button>
            </div>
          </form>

          <div className="upload-drop-zone" id="drop-zone">
            Just drag and drop files here
          </div>
        </div>
      </div>
      <div className="uploadsection">
        <h2>신청서 양식 적어둠</h2>
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
      <div className="buttonsection">
        <button className="sub-button detail-button">신청서 작성하기</button>
        <button className="sub-button detail-button">첨부파일 제출하기</button>
        <button className="sub-button detail-button">돌아가기</button>
      </div>
    </div>
  );
};

export default Test;
