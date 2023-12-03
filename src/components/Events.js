import React from 'react'
import CardComponent from './card'
import ReactCardSlider from 'react-card-slider-component';

function Events() {

  function sliderClick(){
    console.log('clicked')
  }

  const slides = [
    {image:"https://picsum.photos/200/300",title:"This is a title",description:"This is a description",clickEvent:sliderClick},
    {image:"https://picsum.photos/600/500",title:"This is a second title",description:"This is a second description",clickEvent:sliderClick},
    {image:"https://picsum.photos/700/600",title:"This is a third title",description:"This is a third description",clickEvent:sliderClick},
    {image:"https://picsum.photos/500/400",title:"This is a fourth title",description:"This is a fourth description",clickEvent:sliderClick},
    {image:"https://picsum.photos/200/300",title:"This is a fifth title",description:"This is a fifth description",clickEvent:sliderClick},
    {image:"https://picsum.photos/800/700",title:"This is a sixth title",description:"This is a sixth description",clickEvent:sliderClick},
    {image:"https://picsum.photos/300/400",title:"This is a seventh title",description:"This is a seventh description",clickEvent:sliderClick},
]

  return (
    <>
    {/* <div className='container' style= {{display: 'grid', gridTemplateColumns: 'auto auto auto auto ', gap: 25}}>
    <CardComponent></CardComponent>
    <CardComponent></CardComponent>
    <CardComponent></CardComponent>
    <CardComponent></CardComponent>
    <CardComponent></CardComponent>
    <CardComponent></CardComponent>
    <CardComponent></CardComponent>
    <CardComponent></CardComponent>
    <CardComponent></CardComponent>
    <CardComponent></CardComponent>
    <CardComponent></CardComponent>
    <CardComponent></CardComponent>
   

    </div>
     */}

     <CardComponent></CardComponent>
    <div style={{display:'flex', justifyContent: 'center'}}>
     {/* <ReactCardSlider slides={slides}/> */}

    </div>
     
    </>
  )
}

export default Events