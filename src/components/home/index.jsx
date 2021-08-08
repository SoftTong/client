//NOTE HOME CONTENT
import React from "react"
import get_noticelist from "../../service/api/get/get_noticelist"

const HomeContent = () => {

    const getnoticeList = () => {
        get_noticelist(1)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => console.log(err))
    }
    console.log("getNoticeList")
    getnoticeList()
    return (
        <>
            {/* home 관련 component */}
            <div >HOME page Content</div>

        </>
    )

}

export default HomeContent