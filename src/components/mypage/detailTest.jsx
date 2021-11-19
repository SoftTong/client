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

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button
        onClick={download}
        style={{
          cursor: "pointer",
          backgroundColor: "transparent",
          borderRadius: "15px",
          border: 0,
          boxShadow: "inset 0 0 0 2px #f56a6a",
          color: "#f56a6a !important",
          display: "inline-block",
          fontSize: "0.8em",
          fontWeight: 10000,
          height: "3.5em",
          letterSpacing: "0.075em",
          lineHeight: "3.5em",
          padding: "0 2.25em",
          margin: "0 2.25em",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        신청서 다운로드
      </button>
      <button
        onClick={cancel}
        style={{
          cursor: "pointer",
          backgroundColor: "transparent",
          borderRadius: "15px",
          border: 0,
          boxShadow: "inset 0 0 0 2px #f56a6a",
          color: "#f56a6a !important",
          display: "inline-block",
          fontSize: "0.8em",
          fontWeight: 10000,
          height: "3.5em",
          letterSpacing: "0.075em",
          lineHeight: "3.5em",
          padding: "0 2.25em",
          margin: "0 2.25em",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        프로그램 신청 취소
      </button>
    </div>
  );
};

export default Test;
