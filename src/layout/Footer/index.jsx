import React from "react"
import styled from "styled-components"

const FooterStyle = styled.div`
    width: 100%;
    height : auto;
    display : flex;
    justify-content : center;
    /* 위치 맨 밑으로 */
    left : 0;
     bottom: 0;
    right : 0;
    /*  */
`

const Footer = ({ children }) => {
    return (
        <>
            <FooterStyle>
                {children}
            </FooterStyle>
        </>
    )
}

export default Footer