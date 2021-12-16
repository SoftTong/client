import _ from '../../../config/env';

/**
 * @description 프로그램 신청목록 Data 받아오기
 * @method GET
 * @request @headers  SoTong-token
 * @response
 */

const get_applylist = (pageNum) => {
  return fetch(_.SERVER_URL + '/notice/managers/' + Number(pageNum), {
    method: 'GET',
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
      console.log('Error from  get_applylist\n' + err.message + '\n success : ' + err.success);
      throw err;
    });
};

export default get_applylist;
