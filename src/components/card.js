
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/styles.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../App.css';
import { Button } from 'react-bootstrap';
import eventData from '../data/Events.json';
import moment from 'moment';
import 'moment/locale/tr'


function CardComponent({filterType, searchQuery, selectedDateRange}) {

  let [filteredEvents, setFilteredEvents] = useState(eventData);
  

  moment.locale('TR-tr')

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
      responsive: [
        {
          breakpoint: 1070,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 820,
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

    useEffect(() => {
  let updatedEvents = eventData;

  if (searchQuery) {
    updatedEvents = eventData.filter((event) =>
      event.eventName.toLowerCase().includes(searchQuery.toLowerCase()) 
      || event.address.city.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

   if (selectedDateRange && selectedDateRange.length === 2) {
    const startDate = moment(selectedDateRange[0]);
    const endDate = moment(selectedDateRange[1]);

    updatedEvents = updatedEvents.filter((event) =>
      moment(event.startDate).isBetween(startDate, endDate, null, '[]')
    );
  }


  switch (filterType) {
    case 'all':
      
      break;

    case 'popular':
      updatedEvents = updatedEvents.filter(event => event.isPopular);
      break;

    case 'music':
      updatedEvents = updatedEvents.filter(event => event.category.name === 'Müzik');
      break;

    case 'concert':
      updatedEvents = updatedEvents.filter(event => event.category.type.name === 'Konser');
      break;

    case 'festival':
      updatedEvents = updatedEvents.filter(event => event.category.type.name === 'Festival');
      break;

    case 'stage':
      updatedEvents = updatedEvents.filter(event => event.category.name === 'Sahne');
      break;

    case 'theater':
      updatedEvents = updatedEvents.filter(event => event.category.type.name === 'Tiyatro');
      break;

    case 'standup':
      updatedEvents = updatedEvents.filter(event => event.category.type.name === 'Stand Up');
      break;

    case 'art':
      updatedEvents = updatedEvents.filter(event => event.category.name === 'Sanat');
      break;

    case 'painting':
      updatedEvents = updatedEvents.filter(event => event.category.type.name === 'Resim');
      break;

    case 'sculpture':
      updatedEvents = updatedEvents.filter(event => event.category.type.name === 'Heykel');
      break;

    case 'sport':
      updatedEvents = updatedEvents.filter(event => event.category.name === 'Spor');
      break;

    case 'football':
      updatedEvents = updatedEvents.filter(event => event.category.type.name === 'Futbol');
      break;

    case 'basketball':
      updatedEvents = updatedEvents.filter(event => event.category.type.name === 'Basketbol');
      break;

    case 'espor':
      updatedEvents = updatedEvents.filter(event => event.category.type.name === 'Espor');
      break;

    case 'outdated':
      const currentDate = new Date();
      updatedEvents = updatedEvents.filter(event => new Date(event.startDate) < currentDate);
      break;

    default:
    
      break;
  }

   if (filterType !== 'outdated') {
    const currentDate = new Date();
    updatedEvents = updatedEvents.filter((event) => new Date(event.startDate) > currentDate);

    updatedEvents.sort((a, b) => {
      const dateA = new Date(a.startDate);
      const dateB = new Date(b.startDate);
      return dateA - dateB;
    });
  }

  setFilteredEvents(updatedEvents);
  

   
}, [filterType, searchQuery, selectedDateRange]);

    

  return (
    <>
      <div>
        {filteredEvents.length === 0 ? (
          <p style={{ fontSize: '20px', fontStyle: 'oblique' }}>
            Arama kriterlerinize uygun sonuç bulunamadı.
          </p>
        ) : (
          <>
            <Slider style={{ margin: '20px 20px' }} {...settings}>
              {filteredEvents.map((event) => (
                <>
                <div className='cardSlick' key={event.id}>
                  <div className='card-top'>
                    <img
                      src={`images/${event.images[0]}`}
                      alt={event.eventName} />
                    <h2>{event.eventName}</h2>
                  </div>
                  <div className='card-bottom-buy'>
                    <h4>
                       {event.prices.firstPrice === 0
                       ? <span style={{ color: 'green' }}>Ücretsiz</span>
                       : `${event.prices.firstPrice}₺`}
                    </h4>
                    <Link to={`/event/${event.id}`}>
                      <Button
                        size='sm'
                        variant='outline-success'
                        style={{ borderRadius: '20px' }}
                      >
                        Etkinlik Detayı
                      </Button>
                    </Link>
                  </div>
                  <div className='card-bottom'>
                    <p
                      style={{
                        color: moment(event.startDate).isBefore(moment())
                          ? 'red'
                          : 'inherit',
                      }}
                    >
                      {moment(event.startDate).format('Do MMMM YYYY dddd HH:mm ')}
                    </p>
                  </div>
                </div>
                  <div>
                  </div>

                </>
              ))}
            </Slider>
          </>
        )}
      </div>
    </>
  );
}

export default CardComponent;

