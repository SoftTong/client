import _ from "../../../config/env"

/**
 * @description 공지사항 notice detail 정보 받아오기
 * @method GET
 * @request @headers  SoTong-token
 * @response
 */


const get_noticedetail = (noticeId)=>{
 
    return fetch(_.SERVER_URL + "/notice/detail/"+ Number(noticeId), {
            method: 'GET',
            headers : {
                'Authorization': "Bearer " + localStorage.getItem("SoTong-token")
            },
        }).then((res)=> {
            if(res.status===500) throw Promise.resolve({errorCode: 500, errorName: "Server error"})
            if(!res.ok) throw res.json()
            console.log(res)
            return res.json()
        })
        .catch(async(error)=>{
            let err = await error.then()
            console.log(err)
            console.log("Error from  get_noticedetail\n"+err.message+"\n success : "+err.success)
            throw err;
        })
     //}
     
 }

 export default get_noticedetail