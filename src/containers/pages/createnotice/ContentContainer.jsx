import React, { useState } from "react"
import CreateNoticeContent from "../../../components/createnotice"


const ContentContainer = () => {

    //createnotice에서 관리할 모든 state / 함수

    /**
* @description notice 만들떄 필요한 data */
    const [noticeData, setNoticeData] = useState({
        title: "",
        swurl: "",
        tags: [],
        startDate: null,
        endDate: null
    })

    const [newTag, setNewTag] = useState("")

    /**
@description tag 다루는 함수
@function tagCreate
@function tagAdd 
@function tagDelete */
    const handleTags = {
        changetag: (e) => {
            setNewTag(e.target.value)
        },
        add: (e) => {
            if (e.key === 'Enter') {
                console.log(newTag)
                const pushTags = [...noticeData.tags, newTag]
                setNoticeData((state) => ({ ...state, tags: pushTags }));
                setNewTag("")
            }
        },
        delete: (e) => {
            console.log(e.target.innerText)
            console.log(noticeData.tags)
            const deleteTag = noticeData.tags.filter(tag => tag !== e.target.innerText)
            console.log(deleteTag)
            setNoticeData((state) => ({ ...state, tags: deleteTag }));
        }
    }

    /**
     * @description noticeCreate  입력  FUNCTION  */
    let createNoticeFunction = {
        title: (e) => {
            const title = e.target.value;
            return setNoticeData((state) => ({ ...state, title: title }))
        },
        swurl: (e) => {
            const swurl = e.target.value;
            return setNoticeData((state) => ({ ...state, swurl: swurl }))
        },
        tag: (e) => {
            const tags = e.target.value;
            return setNoticeData((state) => ({ ...state, tags: tags }))
        },
        startDate: (e) => {
            const startDate = e.target.value
            return setNoticeData((state) => ({ ...state, startDate: startDate }))
        },
        endDate: (e) => {
            const endDate = e.target.value
            return setNoticeData((state) => ({ ...state, endDate: endDate }))
        }
    }






    return (
        <>
            <CreateNoticeContent
                //props로 넘겨주기
                noticeData={noticeData}
                handleTags={handleTags}
                newTag={newTag}
                createNoticeFunction={createNoticeFunction}

            ></CreateNoticeContent>
        </>
    )

}

export default ContentContainer

