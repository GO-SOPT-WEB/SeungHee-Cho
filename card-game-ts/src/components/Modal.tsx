import { useRecoilState } from "recoil";
import styled from "styled-components";

import { successState } from "../recoil/atom";

export default function Modal() {
    const [isSuccess, setSuccess] = useRecoilState<boolean>(successState);

    return (
        <ModalBox isSuccess={isSuccess}>
            <Content>
                <ModalText>🎊축하합니당 숭숭박사시네용🎊</ModalText>
                <ModalButton onClick={() => setSuccess(false)}>게임으로 돌아가기 </ModalButton>
            </Content>
        </ModalBox>
    )
}

const ModalBox = styled.section<{isSuccess:boolean}>`
    position: fixed;
    width:100vw;
    height:100%;

    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.backgroundBlack};

    display : ${({isSuccess}) => (isSuccess ? "flex" : "none")};
`

const Content = styled.article`
    width: 30%;
    height: 25%;
    background-color: white;

    display : flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    text-align: center;

    border-radius: 1.5rem;

`

const ModalText = styled.article`
    font-size: 2rem;
    margin: 2rem;
`

const ModalButton = styled.button`
    width: 50%;

    border-radius: 0.5rem;
    padding:0.5rem;

`