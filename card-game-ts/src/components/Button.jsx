import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { correctState } from '../recoil/atom';
import resetAll from '../utils/reset';


export default function Button(props) {

  const {difficulty, setAll, flippedList} = props;
  const setCorrect = useSetRecoilState(correctState);
  
  function setDifficulty() {

    resetAll(flippedList);
    setCorrect(0);
    
    switch (difficulty) {
      case "Easy" : 
        setAll(5);
        break;
      case "Normal" :
        setAll(7);
        break;
      case "Hard" :
        setAll(9);
        break;
    }
  }

  return (
    <DiffBtn onClick={setDifficulty}>{difficulty}</DiffBtn>
  )
}

const DiffBtn = styled.button`

  padding: 1rem 2rem;

  box-shadow: 0.5rem 0.5rem 0.5rem black;
  background-color: white;
  border: 0rem;
  border-radius: 1rem;

  font-size: 2.5rem;
`
