import { useSetRecoilState } from "recoil";
import styled from "styled-components";

import { correctState } from "../recoil/atom";

export default function ResetButton() {
  const setCorrect = useSetRecoilState<number>(correctState)
  return (
    <ResetBtn onClick={()=>setCorrect(0)}>RESET</ResetBtn>
  )
}


const ResetBtn = styled.button`
  position: sticky;
  top: 0;
  left: 100%;

  margin: 4rem 3rem 3rem 3rem;
  padding: 1rem 2rem;

  background-color: white;
  border: 0px;
  border-radius: 1rem;
  box-shadow: 0.5rem 0.5rem 0.5rem ${({ theme }) => theme.colors.yellow};

  font-size: 3.5rem;

  z-index: 1;
`