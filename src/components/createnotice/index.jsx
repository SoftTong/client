//NOTE CreateNotice CONTENT
import React from "react"
import styled from "styled-components"

const CreateNoticeWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
animation: 0.5s ease 0s 1 normal forwards running bcCCNc;
`


const CreateArea = styled.div`

background-color: white;
min-width: 0px;
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
    box-shadow: rgb(0 0 0 / 2%) 0px 0px 8px;

`

const PreviewArea = styled.div`
    min-width: 0px;
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    position: relative;
background-color: rgb(251, 253, 252);
`



const CreateNoticeContent = () => {

    return (
        <>
            <CreateNoticeWrapper>
                {/* CreateNotice 관련 component */}
                {/* SECTION 게시글 작성하기 */}
                <CreateArea>
                    <div>ddddd</div>
                </CreateArea>
                {/*! SECTION  */}

                {/* SECTION 게시글 미리보기 */}
                <PreviewArea>
                    <div>ddddd</div>
                </PreviewArea>
                {/*! SECTION 게시글  */}
            </CreateNoticeWrapper>
        </>
    )

}

export default CreateNoticeContent