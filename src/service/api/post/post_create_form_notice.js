import _ from "../../../config/env";

/**
 * @description  게시글 만들기
 * @method POST
 * @request @headers  SoTong-token
 * @request @body requestData
 * @response
 */

const create_form_notice = (requestData) => {
  console.log("requestdata");
  console.log(requestData);
  return fetch(_.SERVER_URL + "/notice/form/board", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
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
        "Error from  create_form_notice\n" +
          err.message +
          "\n success : " +
          err.success
      );
      throw err;
    });
  //}
};

export default create_form_notice;
