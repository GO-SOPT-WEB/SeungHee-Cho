import React from 'react'
import styled from 'styled-components'

const Skeleton = () => {
  return (
    <St.SkeletonWrapper>
        <St.HeaderBox/>
        <St.ImgBox/>
        <St.DescriptionBox/>
    </St.SkeletonWrapper>
  )
}

export default Skeleton

const St = {
    SkeletonWrapper : styled.article`
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: center;

        position : relative;

        width: 20%;
        height:40rem;
        padding : 2rem 0rem;
        margin: 1rem;

        background-color: white;
        border-radius: 1.5rem;

        overflow: hidden;


        @keyframes loading {
            0% {
                transform: translateX(0);
            }
            50%,
            100% {
                transform: translateX(460px);
            }
        }

        &::before {
            content: '';
            position: absolute;
            top:0;
            left:0;

            width: 3rem;
            height: 100%;
            background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
            animation: loading 1.5s infinite linear;
        }
    `,
    HeaderBox : styled.div`
        width: 50%;
        height: 10%;

        border-radius: 1rem;
        background-color:lightgray;
    `,
    ImgBox : styled.section`
        width: 70%;
        height: 45%;

        background-color:lightgray;
        border-radius: 1rem;
    `,
    DescriptionBox : styled.div`
        width: 70%;
        height: 30%;

        background-color: lightgray;
        border-radius: 1rem;
    `

}