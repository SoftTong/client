import _ from '../../../config/env';

/**
 * @description 유저상태 수정하기
 * @method PATCH
 * @request @headers  SoTong-token
 *  * @request @body requestData
 * @response
 */

const patch_userStatus = (userId, userStatus) => {
  return fetch(_.SERVER_URL + '/apply/status/' + userId, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('SoTong-token'),
    },
    body: userStatus,
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
