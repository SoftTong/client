import _ from "../../../config/env";

/**
 * @description 유저정보 수정하기
 * @method PATCH
 * @request @headers  SoTong-token
 *  * @request @body requestData
 * @response
 */

const patch_userInfo = (requestData) => {
  return fetch(_.SERVER_URL + "/members/info", {
    method: "PATCH",
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
        "Error from  patch_userInfo\n" +
          err.message +
          "\n success : " +
          err.success
      );
      throw err;
    });
  //}
};

export default patch_userInfo;
