import React from 'react'
import CardComponent from './card'

function FilteredCities(filteredCity) {
  return (
    <div>
        <CardComponent filterType={filteredCity} /> 
    </div>
  )
}

export default FilteredCities