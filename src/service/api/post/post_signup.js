import _ from "../../../config/env"

/** 
 * @description sign up 
 * @method POST
 * @request @headers 
 * @request @body user
 */

 const post_signup = (signupInfo)=>{

    
        return( fetch(_.SERVER_URL + "/register/user", {
              method : 'POST',
              headers : {
                'Content-Type': 'application/json',
              },
              body : signupInfo
            })
           .then((res)=>{
            if(!res.ok) throw res.json()
            console.log(res)
           })
            .catch(async(error) =>{
                let err = await error.then()
                // console.log(`Error from sing-up \n ${err}`)
                console.log(err)
                console.log("Error from  sing-up\n"+err.errorCode+"\n"+err.errorName)
                throw err;
            } )
        )
  }
  
  export default post_signup