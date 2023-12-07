import React from 'react'
import CardComponent from './Card'

function Events({selectedCategory}) {

  return (
    <>
    <CardComponent filterType={selectedCategory} /> 
    </>
  )
}

export default Events