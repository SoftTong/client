import React from "react"
import styled from "styled-components"
import ContentContainer from "../../containers/pages/profile/ContentContainer"
import Header from "../../containers/redux/components/Header"
import ContentLayout from "../../layout/Content"

const WholeWrapper = styled.div`
 /* display : -webkit-box;
    display : -moz-box; */
    height : 100vh;
    width : 100%;
`

//TODO header
const Profile = () => {

    return (
        <>
            <WholeWrapper>
                <Header></Header>
                <ContentLayout>
                    <ContentContainer />
                </ContentLayout>

            </WholeWrapper>
        </>
    )
}

export default Profile