import { useMemo, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { monkeyData, monkeyDataInfo } from "../constant/cardData";
import { allState } from "../recoil/atom";
import Button from "./Button";
import Card from "./Card";

export default function CardSectionLayout() {

  const [flippedList,setFlippedList] = useState<HTMLElement[]>([]);   // 완성된 카드 배열
  const DIFFICULTY : string[] = ["Easy", "Normal", "Hard"];  

  const all : number = useRecoilValue<number>(allState);
  

  function shuffle (array : monkeyDataInfo[]) : void {
    array.sort(() => Math.random() - 0.5);
  }

  //카드 배열하는 함수
  function arrayCard (arr : monkeyDataInfo[]) : monkeyDataInfo[] {
    shuffle(arr);   
    let tempArray : monkeyDataInfo[] = arr.slice(0,all);

    for (let i=0; i<all; i++) {
      tempArray.push({
        id: tempArray[i].id+10,
        src: tempArray[i].src
      })
    }

    shuffle(tempArray);

    return tempArray;
  }

  // 난이도가 변경될 때마다 카드 배열 재조합/재정렬
  const monkeyList : monkeyDataInfo[] = useMemo<monkeyDataInfo[]>(() => {
    return arrayCard(monkeyData);
  }, [all])

  const monkeyComponentList : JSX.Element[] = monkeyList.map(({id,src} : monkeyDataInfo) => 
    <Card 
      key={id} 
      idx={id} 
      src={src} 
      flippedList={flippedList} setFlippedList={setFlippedList} />);
  
  return (
    <MainSection>
      <ButtonBox>
        {DIFFICULTY.map((el)=>
          <Button key={el} difficulty={el} flippedList={flippedList}/>
        )}
      </ButtonBox>
      <CardSection>
        {monkeyComponentList}
      </CardSection>
    </MainSection>
  )
}

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;

  background-image: url('src/assets/바나나배경.png');
  
`

const ButtonBox = styled.article`
  display: flex;
  gap: 1rem;

  margin-top: 2rem;
`

const CardSection = styled.ul`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 23rem);
    gap: 2.5rem;

    width: 100%;
    padding: 3rem 10rem;
`