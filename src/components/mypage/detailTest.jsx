import { React, useState } from "react";
import get_filedownload from "../../service/api/get/get_filedownload";

const Test = (
  filePath,
  applyPageList,
  applyIsDetailVisible,
  applydetailHandling,
  applyDetailData,
  fileDownload
) => {
  console.log("누르기전");
  console.log(filePath.filePath);
  // const downloadfilePath = filePath.filePath;
  // console.log(downloadfilePath);
  const download = () => {
    console.log("누르기전 확인");
    console.log(filePath.filePath);
    get_filedownload(filePath.filePath)
      .then((res) => {
        console.log("성공");
      })
      .catch((err) => {
        console.log(err);
        console.log("파일 다운로드 실패");
      });
  };

  return (
    <div>
      <li onClick={download}>download</li>
    </div>
  );
};

export default Test;
