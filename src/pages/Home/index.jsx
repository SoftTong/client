import React from "react"
import styled from "styled-components"
import ContentContainer from "../../containers/pages/home/ContentContainer"
import Header from "../../layout/Header"

const WholeWrapper = styled.div`
    width : 100%;
    display : -webkit-box;
    display : -moz-box;
    /* overflow-x: hidden; */
    /* position : relative; */

`

const ContentWrapper = styled.div`
    height : 100%;
    width : 100%;
`

//TODO header
const Home = () => {

    return (
        <>
            <WholeWrapper>
                <ContentWrapper>
                    <Header></Header>
                    <ContentContainer>
                    </ContentContainer>
                </ContentWrapper>

            </WholeWrapper>
        </>
    )
}

export default Home