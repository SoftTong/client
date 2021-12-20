import _ from "../../../config/env";

/**
 * @description  신청서 폼 제출
 * @method POST
 * @request @headers  SoTong-token
 * @request @body requestData
 * @response
 */
const submit_form = (questionId, requestData) => {
  console.log("requestdata");
  console.log(typeof requestData);
  return fetch(_.SERVER_URL + "/apply/form/" + Number(questionId), {
    method: "POST",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("SoTong-token"),
      "Content-Type": "application/json",
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
        "Error from  submit_form\n" +
          err.message +
          "\n success : " +
          err.success
      );
      throw err;
    });
  //}
};

export default submit_form;
