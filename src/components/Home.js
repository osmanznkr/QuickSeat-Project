import React from 'react'
import CardComponent from './Card'
import Slider from './Slider'

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