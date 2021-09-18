import _ from "../../../config/env";

/**
 * @description 다운로드 파일 받아오기
 * @method GET
 * @request @headers  SoTong-token
 * @response
 */

const get_filedownload = (filePath) => {
  console.log(filePath);
  return fetch(
    _.SERVER_URL + "/notice/download/file/" + `${filePath}`,

    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("SoTong-token"),
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => {
      if (res.status === 500)
        throw Promise.resolve({ errorCode: 500, errorName: "Server error" });
      if (!res.ok) throw res.json();

      return res.blob();
    })
    .then((data) => {
      if (data.size === 0) {
        throw new Error("File not found");
      }
      const fileURL = URL.createObjectURL(data);
      const downloadLink = document.createElement("a");
      downloadLink.href = fileURL;
      downloadLink.download = filePath;
      downloadLink.click();
    })
    .catch(async (error) => {
      let err = await error.then();
      console.log(err);
      console.log(
        "Error from  get_filedownload\n" +
          err.message +
          "\n success : " +
          err.success
      );
      throw err;
    });
  //}
};

export default get_filedownload;
