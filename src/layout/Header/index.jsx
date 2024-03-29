import React from "react"
import styled from "styled-components"

const HeaderStyle = styled.div`
     width: 1530px;
  margin-left: auto;
  margin-right: auto;
    height : inherit;
    display : flex;
    justify-content : center;
    flex-wrap : wrap;
    flex-direction: column;
    box-sizing: border-box;

    @media screen and (max-width: 1790px) {
    width: 1240px;
}

@media screen and (max-width: 1440px) {
    width: 990px;
}

@media screen and (max-width: 1056px) {
    width: calc(100% - 2rem);
    padding : 2.6vh 2.6vw;
  }

`

const Header = ({ children, style }) => {

    return (
        <>
            <HeaderStyle style={style}>
                {children}
            </HeaderStyle>
        </>
    )
}

export default Header