import { useEffect, useRef } from 'react';
import styled from 'styled-components';

export default function HeaderLayout({correct,all}) {

  const countRef = useRef();

  // 카드 일치 시 correct 값이 변하면, 점수판에 0.5초동안 애니메이션 부여
  useEffect(() => {
    countRef.current.classList.add('anim');
    setTimeout(() => {
      countRef.current.classList.remove('anim');
    }, 500);
  }, [correct])
  

  return (
    <GameHeader>
      <h1>🐒숭이를 찾아라!🐒</h1>
      <GameCount ref={countRef}>{correct}/{all}</GameCount>
    </GameHeader>
  )
}

const GameHeader = styled.header`
  text-align: center;

  width: 100%;
  padding:2rem;

  background-color: ${({ theme }) => theme.colors.skyBlue};

  color : ${({ theme }) => theme.colors.black};
  font-size: 6rem;

`;

const GameCount = styled.p`
  margin-top: 2rem;
  
  color: ${({ theme }) => theme.colors.darkGray};

  &.anim {
    animation : 1.3s anim-flipX ease
  }

  @keyframes anim-flipX {
      0% {
        opacity: 0;
        transform: rotateX(90def);
      }
      50% {
        opacity: 1;
        transform: rotateX(720deg);
      }
      100% {
        opacity: 1;
        transform: rotateX(720deg);
      }
    }
`
