import _ from "../../../config/env";

/**
 * @description 신청목록 detail 정보 받아오기
 * @method GET
 * @request @headers  SoTong-token
 * @response
 */

const get_applydetail = (applyId, dtype) => {
  if (dtype === "file") {
    return fetch(_.SERVER_URL + "/apply/file/detail/" + Number(applyId), {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("SoTong-token"),
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
          +"Error from  get_noticedetail\n" +
            err.message +
            "\n success : " +
            err.success
        );
        throw err;
      });
  } else if (dtype === "form") {
    return fetch(_.SERVER_URL + "/apply/form/detail/" + Number(applyId), {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("SoTong-token"),
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
          +"Error from  get_noticedetail\n" +
            err.message +
            "\n success : " +
            err.success
        );
        throw err;
      });
  }
};

export default get_applydetail;
