import _ from '../../../config/env';

/**
 * @description 유저상태 수정하기
 * @method PATCH
 * @request @headers  SoTong-token
 *  * @request @body requestData
 * @response
 */

const patch_userStatus = (userApplyId, userStatus) => {
  const bodyRequest = JSON.stringify({
    status: userStatus,
  });
  console.log(bodyRequest);
  console.log(userApplyId);
  return fetch(_.SERVER_URL + '/apply/status/' + Number(userApplyId), {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('SoTong-token'),
    },
    body: bodyRequest,
  })
    .then((res) => {
      if (res.status === 500) throw Promise.resolve({ errorCode: 500, errorName: 'Server error' });
      if (!res.ok) throw res.json();
      console.log(res);
      return res.json();
    })
    .catch(async (error) => {
      let err = await error.then();
      console.log(err);
      console.log('Error from  patch_userStatus\n' + err.message + '\n success : ' + err.success);
      throw err;
    });
  //}
};

export default patch_userStatus;
