import React from 'react'
import CardComponent from './card'
import Slider from './Slider'

function Home() {
  return (
    <>
    <Slider></Slider>
    <h2>Popüler Etkinlikler</h2>
    <CardComponent filterType="popular"></CardComponent>
    </>
  )
}

export default Home