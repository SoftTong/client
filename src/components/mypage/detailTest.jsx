import { React } from "react";
import get_filedownload from "../../service/api/get/get_filedownload";
import delete_apply from "../../service/api/delete/delete_apply";
import { useHistory } from "react-router-dom";

const Test = (props) => {
  const download = () => {
    get_filedownload(props.filePath)
      .then((res) => {
        console.log("성공");
      })
      .catch((err) => {
        console.log(err);
        console.log("파일 다운로드 실패");
      });
  };
  const history = useHistory();
  const cancel = () => {
    delete_apply(props.applyDetailDataId)
      .then((res) => {
        console.log("성공");
        history.push("/mypage");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        console.log("파일 다운로드 실패");
      });
  };
  console.log(props.applyDetailData);

  if (props.applyDetailData.dtype == "file") {
    return (
      <div>
        <div className="section">
          <iframe
            src={props.applyDetailData.noticeUrl}
            width="100%"
            height="650px"
          ></iframe>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={download} className="sub-button">
            신청서 다운로드
          </button>
          <button onClick={cancel} className="sub-button">
            프로그램 신청 취소
          </button>
        </div>
      </div>
    );
  } else if (props.applyDetailData.dtype == "form") {
    const questionArray = props.applyDetailData.question.split("$$$");
    const answerArray = props.applyDetailData.answer.split("$$$");

    console.log(questionArray);
    console.log(answerArray);
    return (
      <div>
        <div className="section">
          <iframe
            src={props.applyDetailData.noticeUrl}
            width="100%"
            height="650px"
          ></iframe>
        </div>
        <div style={{ display: "flex", width: "100%", paddingTop: "50px" }}>
          <div style={{ width: "50%" }}>
            {questionArray.map((question, index) => {
              return (
                <div
                  style={{
                    height: "30px",
                    margin: "10px",
                    paddingLeft: "20px",
                  }}
                >
                  {" "}
                  <strong>{questionArray[index]}</strong>
                </div>
              );
            })}
          </div>

          <div style={{ width: "50%" }}>
            {answerArray.map((answer, index) => {
              return (
                <div
                  style={{
                    width: "80%",
                    height: "30px",
                    margin: "10px",
                    paddingLeft: "10px",
                    border: "1px solid black",
                  }}
                >
                  {answerArray[index]}
                </div>
              );
            })}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            paddingTop: "30px",
            justifyContent: "center",
          }}
        >
          <button onClick={cancel} className="sub-button">
            프로그램 신청 취소
          </button>
        </div>
      </div>
    );
  }
};

export default Test;
