import _ from "../../../config/env";

/**
 * @description  첨부파일 업로드
 * @method POST
 * @request @headers  SoTong-token
 * @request @body requestData
 * @response
 */

const upload_file = (requestData) => {
  console.log("requestdata");
  console.log(requestData);
  return fetch(_.SERVER_URL + "/notice/file/apply", {
    method: "POST",
    headers: {
      "Content-type": "multipart/form-data",
      Authorization: "Bearer " + localStorage.getItem("SoTong-token"),
    },
    body: requestData,
  })
    .then((res) => {
      if (res.status === 500)
        throw Promise.resolve({ errorCode: 500, errorName: "Server error" });
      if (!res.ok) throw res.json();
      console.log(res);
      return res.json();
    })
    .catch(async (error) => {
      let err = await error.then();
      console.log(err);
      console.log(
        "Error from  upload_file\n" +
          err.message +
          "\n success : " +
          err.success
      );
      throw err;
    });
  //}
};

export default upload_file;
