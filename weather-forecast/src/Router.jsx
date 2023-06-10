import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import DayForecast from './pages/DayForecast';
import WeekForecast from './pages/WeekForecast';
import DayCard from './components/DayCard';
import WeekCard from './components/WeekCard';


const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/day" element={<DayForecast/>}>
                <Route path=":area" element={<DayCard/>} />
            </Route>
            <Route path="/week" element={<WeekForecast/>}>
                <Route path=":area" element={<WeekCard/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router