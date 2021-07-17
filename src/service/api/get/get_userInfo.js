import _ from "../../../config/env"

/**
 * @description 유저정보 받아오기 
 * @method GET
 * @request @headers 
 * @request @body user
 * @response
 */


const get_userInfo = ()=>{
 
    return fetch(_.SERVER_URL + "/userinfo", {
        // return fetch(_.SERVER_URL + "/gettest", {
            method: 'GET',
            headers : {
                'Content-Type': 'application/json',
            },
        }).then((res)=> {
            if(res.status===500) throw Promise.resolve({errorCode: 500, errorName: "Server error"})
            if(!res.ok) throw res.json()
            console.log(res)
        })
        .catch(async(error)=>{
            let err = await error.then()
            // console.log(`Error from get_userInfo-up \n ${err}`)
            // console.log(err)
            console.log("Error from  get_userInfo-up\n"+err.errorCode+"\n"+err.errorName)
            throw err;
        })
     //}
     
 }

 export default get_userInfo