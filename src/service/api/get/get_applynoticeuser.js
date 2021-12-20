import _ from '../../../config/env';

/**
 * @description 관리자가 작성한 게시물에 지원한 지원서 정보들
 * @method GET
 * @request @headers  SoTong-token
 * @response
 */

const get_apply_notice_user = (noticeId, pageNum) => {
  console.log('check');
  console.log(noticeId);
  console.log(pageNum);
  return fetch(_.SERVER_URL + '/apply/' + Number(noticeId) + '/' + Number(pageNum), {
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

export default get_apply_notice_user;
