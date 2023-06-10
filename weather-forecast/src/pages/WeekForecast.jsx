import React from 'react'
import { Outlet } from 'react-router-dom'
import PageLayout from '../components/PageLayout'

const WeekForecast = () => {
  return (
    <PageLayout>
      <Outlet/>
    </PageLayout>
  )
}

export default WeekForecast