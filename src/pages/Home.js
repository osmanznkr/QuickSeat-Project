import React from 'react'
import CardComponent from '../components/Card'
import Slider from '../components/Slider'

function Home() {
  return (
    <>
    <Slider></Slider>
    <h2 className='titles'>Popüler Etkinlikler</h2>
    <CardComponent filterType="popular"></CardComponent>
    </>
  )
}

export default Home