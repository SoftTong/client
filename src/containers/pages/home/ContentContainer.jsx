import React from "react"
import HomeContent from "../../../components/home"
import _ from "../../../config/env";

const ContentContainer = () => {

    //HOME에서 관리할 모든 state / 함수
    const get_noticelist = (noticeId) => {
        console.log(localStorage.getItem("SoTong-token"))
        return fetch(_.SERVER_URL + "/notice/" + Number(noticeId), {
            method: 'GET',
            headers: {
                'Authorization': "Bearer " + localStorage.getItem("SoTong-token")
            },
        }).then((res) => {
            if (res.status === 500) throw Promise.resolve({ errorCode: 500, errorName: "Server error" })
            if (!res.ok) throw res.json()
            console.log(res)
            return res.json()
        })
            .catch(async (error) => {
                let err = await error.then()
                console.log(err)
                console.log("Error from  get_managenoticelist\n" + err.message + "\n success : " + err.success)
                throw err;
            })
        //}

    }

    get_noticelist(0)
        .then(res => console.log(res))
        .catch(err => console.log(err))

    return (
        <>
            <HomeContent
            //props로 넘겨주기

            ></HomeContent>
        </>
    )

}

export default ContentContainer


