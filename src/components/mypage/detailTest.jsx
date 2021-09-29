import { React } from "react";
import get_filedownload from "../../service/api/get/get_filedownload";
import delete_apply from "../../service/api/delete/delete_apply";
import { useHistory } from "react-router-dom";

const Test = (props) => {
  const download = () => {
    get_filedownload(props.filePath.filePath)
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
      })
      .catch((err) => {
        console.log(err);
        console.log("파일 다운로드 실패");
      });
  };

  return (
    <div>
      <p onClick={download} style={{ cursor: "pointer" }}>
        다운로드
      </p>
      <a onClick={cancel} style={{ cursor: "pointer" }}>
        신청취소
      </a>
    </div>
  );
};

export default Test;
