import React from "react"





const Test = ({ detailNoticeData }) => {
    console.log("DetailTest")
    console.log(detailNoticeData)
    return (
        <div>{detailNoticeData.title}</div>
    )
}


export default Test;