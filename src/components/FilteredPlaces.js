import React from 'react'
import CardComponent from './card'

function FilteredPlaces(filteredCity) {
  return (
    <div>
        <CardComponent filterType={filteredCity} /> 
    </div>
  )
}

export default FilteredPlaces