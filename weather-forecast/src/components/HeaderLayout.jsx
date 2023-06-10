import React from 'react'
import styled from "styled-components";

const HeaderLayout = () => {
  return (
    <St.Header>
        ☁️ 숭이의 날씨예보 ☁️
    </St.Header>
  )
}

export default HeaderLayout

const St = {
    Header : styled.h1`
    display: flex;
    align-items: center;

    padding: 3rem;
    height: 14%;

    background-color: ${({ theme }) => theme.colors.titleBlue};
    
    color: white;
    font-size: 4rem;
    `
}