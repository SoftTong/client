
//NOTE contentContainer / component

import React, { useState } from "react";
import styled from "styled-components";


//  SECTION TEST

const CreateFormTestBtn = styled.input.attrs(props => ({ type: "button" }))`
     border-radius: 0.8rem;
  box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #FFFFFF;
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:  0.3s ease;
  font-size:  1rem;
  padding : 8px 16px;
`


// !SECTION


const TestCreateForm = () => {

    const [isTestOpen, setIsTestOpen] = useState(false)
    const testBtnOnClick = () => {

    }

    return (
        <>
            <CreateFormTestBtn></CreateFormTestBtn>
        </>
    )
}

export default TestCreateForm