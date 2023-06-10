import styled from 'styled-components';
import CardSectionLayout from '../components/CardSectionLayout';
import HeaderLayout from '../components/HeaderLayout';
import Modal from '../components/Modal';

export default function FindMonkey() {

  return (
    <MainBox>
        <HeaderLayout />
        <CardSectionLayout />
        <Modal />
    </MainBox>
  )
}

const MainBox = styled.main`
  display:flex;
  flex-direction: column;

  position: absolute;
  
  width: 100%;
`