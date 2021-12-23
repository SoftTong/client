import _ from '../../../config/env';

/**
 * @description 신청한 프로그램 취소하기
 * @method DELETE
 * @request @headers  SoTong-token
 * @response
 */

const delete_notice = (applyId) => {
  return fetch(_.SERVER_URL + '/notice/remove/' + Number(applyId), {
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('SoTong-token'),
    },
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
      console.log(+'Error from  delete_notice\n' + err.message + '\n success : ' + err.success);
      throw err;
    });
};

export default delete_notice;
