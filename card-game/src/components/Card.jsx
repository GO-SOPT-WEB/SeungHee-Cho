import styled from 'styled-components';
import resetAll from '../utils/reset';

import { useEffect } from 'react';

let flag = true;        // 카드 선택 제어 (2개선택시 추가 선택 제한)
let flippingList = [];  // 실시간으로 뒤집혀진 카드 배열 

export default function Card(props) {

  const {idx,src, correct, setCorrect, all, flippedList, setFlippedList, setSuccess} = props;

  // reset 버튼 클릭 시 카드 초기화
  if (correct === 0) {
    resetAll(flippedList);
  }

  useEffect(() => {
    if (correct === all) {
      setSuccess(true);
    }
  }, [correct]);

  // 카드 뒤집는 함수 
  const handleFlipCard = (e) => {
    if (!flag) {return}                                     //Flag가 false면 진행 X

    let card = e.currentTarget;                             
    card.classList.add('flipped');                          // 뒤집기 
    flippingList.push(card);                                // 현재 뒤집힌 카드 배열에 push

    if (flippingList.length === 2) {                        
      if (flippingList[0].id === flippingList[1].id) {      

        setCorrect(correct+1);                              

        setFlippedList([...flippedList, ...flippingList]);  
        flippingList = [];                                  

      }
      else {                                                
        flag = false;

        setTimeout(() => {
          flippingList[0].classList.remove('flipped');
          flippingList[1].classList.remove('flipped');      

          flippingList = [];                                

          flag = true;
        },500);
      }
    }

  }

  return (
    <Wrapper>  
     <OneCard onClick={handleFlipCard} id={idx%10}>
        <CardBack>🙈</CardBack>
        <CardImg src={src} alt="카드 이미지"/>
      </OneCard>
    </Wrapper>
  )
}



const Wrapper = styled.li`
  text-align: center;

  background-color:white;
  border-radius : 1rem;
  box-shadow: 0.5rem 0.5rem 0.5rem ${({ theme }) => theme.colors.darkGray};
`

const OneCard = styled.section`
  position:relative;

  width:100%;
  height:100%;

  transition: all 0.5s;
  transform-style: preserve-3d;
  &.flipped {
    transform: rotateY(180deg);
  }
`

const CardBack = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  width: 100%;
  height: 100%;

  border-radius: 1rem;
  background-color: black;
  backface-visibility: hidden;

  font-size: 5rem;
`

const CardImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  border-radius: 1rem;
  backface-visibility: hidden;

  transform: rotateY(180deg);
`
