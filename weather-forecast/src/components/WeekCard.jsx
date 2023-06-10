import { useParams } from "react-router-dom";
import styled from "styled-components";
import { WEATER_TYPE } from '../constants/weather';
import useGetWeather from '../hooks/useGetWeather';
import ErrorLayout from "./ErrorLayout";
import Skeleton from './Skeleton';

const WeekCard = () => {

  const {area} = useParams();
  const { dataList, loading, error } = useGetWeather("week", area);
  const imgsrc = WEATER_TYPE.filter(item => weather && (item.description === weather[0].description))[0]?.imgURL;

  return (    
    <>
      {error ? <ErrorLayout/> :  (
        dataList && 
        dataList.map(({ dt_txt, weather, main, clouds }) => (
          loading? <Skeleton key={dt_txt}/> : (
          <St.CardWrapper key={dt_txt}>
            <h1>{dt_txt.slice(5,10)}</h1>
            <img src={imgsrc}/>
            <St.CardText>
              <p>온도</p>
              <p>{main.temp}</p>
            </St.CardText>
            <St.CardText>
              <p>체감 온도</p>
              <p>{main.feels_like}</p>
            </St.CardText>
            <St.CardText>
              <p>최저/최고</p>
              <p>{main.temp_min}/{main.temp_max}</p>
            </St.CardText>
            <St.CardText>
              <p>구름</p>
              <p>{clouds.all}%</p>
            </St.CardText>
          </St.CardWrapper>)))
      )  
    }
    </>
  )
}


export default WeekCard

const St = {
  CardWrapper : styled.article`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;

    width: 18%;
    padding : 2rem 0rem;
    margin : 1rem;

    background-color: ${({ theme }) => theme.colors.cardBlue};
    border-radius: 1.5rem;

    color:black;
    font-size: 3.5rem;

    & > h1 {
      color:white;
    }

    & > img {
      width: 70%;
      
      border-radius: 1rem;
    }
    
  `, 
  CardText : styled.div`
    display: flex;
    justify-content: space-between;

    width: 70%;
  `
}