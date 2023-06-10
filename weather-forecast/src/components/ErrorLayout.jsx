import styled from "styled-components";


const ErrorLayout = () => {
  return (
    <ErrorWrapper>
        죄송합니다.🙏🏻 <br/> 다시 시도해주세요.🙏🏻
    </ErrorWrapper>
  )
}

export default ErrorLayout

const ErrorWrapper = styled.p`
    display:flex;
    justify-content: center;
    text-align: center;

    width:100vw;
    height:100vh;
    margin-top: 7rem;

    font-size : 4rem;
    color: black;
`