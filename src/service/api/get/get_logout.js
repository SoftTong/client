import _ from "../../../config/env"

/**
 * @description logout
 * @method GET
 * @request @headers 
 */

const get_logout = () =>{
    return fetch(_.SERVER_URL + "/logout" ,{
        method : 'GET',
        headers : {
            'Content-Type': 'application/json',
        }
    }).then((res)=> {
        if(res.status===500) throw Promise.resolve({errorCode: 500, errorName: "Server error"})
        if (!res.ok) throw res.json()
        return res.json()
    }).catch(async(error)=>{
        let err =  await error.then()
        console.log("Error from logIn\n"+err.errorCode+"\n"+err.errorName)
         //에러처리
        throw err
    })
}

export default get_logout