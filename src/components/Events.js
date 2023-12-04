import React from 'react'
import CardComponent from './card'

function Events({selectedCategory}) {

  return (
    <>
    <CardComponent filterType={selectedCategory} /> 
    </>
  )
}

export default Events