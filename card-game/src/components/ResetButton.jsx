import styled from 'styled-components';

export default function ResetButton({setCorrect}) {
  return (
    <ResetBtn onClick={()=>setCorrect(0)}>RESET</ResetBtn>
  )
}


const ResetBtn = styled.button`
  position: sticky;
  top: 0;
  left: 100%;

  margin: 3rem;
  padding: 1rem 2rem;

  background-color: white;
  border: 0px;
  border-radius: 1rem;
  box-shadow: 0.5rem 0.5rem 0.5rem ${({ theme }) => theme.colors.shadowBlue};

  font-size: 4rem;

  z-index: 1;
`