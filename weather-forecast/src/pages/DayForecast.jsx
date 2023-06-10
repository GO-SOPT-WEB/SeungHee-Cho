import React from 'react'
import { Outlet } from 'react-router-dom'
import DayCard from '../components/DayCard';
import PageLayout from '../components/PageLayout'

const DayForecast = () => {
  return (
    <PageLayout>
      <Outlet/>
    </PageLayout>
  )
}

export default DayForecast