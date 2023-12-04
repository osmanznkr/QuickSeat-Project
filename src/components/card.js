/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../styles/styles.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../App.css';
import { Button } from 'react-bootstrap';
import eventData from '../data/Events.json';

function CardComponent({filterType}) {

   const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: "linear",
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      pauseOnHover: true,
      // swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            dots: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }
      ]
    };

    let filteredEvents = eventData;

   switch (filterType) {

     case 'popular':
       filteredEvents = eventData.filter(event => event.isPopular);
       break;

     case 'music':
       filteredEvents = eventData.filter(event => event.category.name === 'Müzik');
       break;
    
     case 'concert':
       filteredEvents = eventData.filter(event => event.category.type.name === 'Konser');
       break;

     case 'festival':
       filteredEvents = eventData.filter(event => event.category.type.name === 'Festival');
       break;

     case 'stage':
       filteredEvents = eventData.filter(event => event.category.name === 'Sahne');
       break;

     case 'theater':
       filteredEvents = eventData.filter(event => event.category.type.name === 'Tiyatro');
       break; 

     case 'standup':
       filteredEvents = eventData.filter(event => event.category.type.name === 'StandUp');
       break;

      case 'art':
       filteredEvents = eventData.filter(event => event.category.name === 'Sanat');
       break; 

     case 'painting':
       filteredEvents = eventData.filter(event => event.category.type.name === 'Resim');
       break;

     case 'sculpture':
       filteredEvents = eventData.filter(event => event.category.type.name === 'Heykel');
       break; 

     default:
       filteredEvents = eventData;
       break;
}

  return <>
  <div>
    <Slider style={{ margin: '20px 20px' }} {...settings}>
        {filteredEvents.map(event => (
          <div className='cardSlick' key={event.id}>
            <div className='card-top'>
              <img src={`images/${event.images[1]}`} alt={event.eventName} />
              <h2>{event.eventName}</h2>
            </div>
            <div className='card-bottom-buy'>
              <h4>{event.prices.firstPrice}₺</h4>
              <Button
                size='sm'
                variant='outline-success'
                style={{ borderRadius: '20px' }}
              >
                Etkinlik Detayı
              </Button>
            </div>
            <div className='card-bottom'>
              <p>{event.startDate}</p>
            </div>
          </div>
        ))}
      </Slider>
  </div>
        

  </>

}

export default CardComponent;



