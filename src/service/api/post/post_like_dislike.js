import _ from "../../../config/env";

/**
 * @description  좋아요 기능
 * @method POST
 * @request @headers  SoTong-token
 * @request @body requestData
 * @response
 */
const like_dislike = (noticeId) => {
  console.log("requestdata");
  console.log(typeof requestData);
  return fetch(_.SERVER_URL + "/notice/like/" + Number(noticeId), {
    method: "POST",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("SoTong-token"),
      "Content-Type": "application/json",
    },
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
        "Error from  submit_form\n" +
          err.message +
          "\n success : " +
          err.success
      );
      throw err;
    });
  //}
};

export default like_dislike;
