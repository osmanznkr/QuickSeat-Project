import React from 'react';
import { Link, useParams } from 'react-router-dom';
import eventData from '../data/Events.json';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { enums } from '../store/enums';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import PriceModal from './PriceModal';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


function EventDetail(props) {
  const { id } = useParams();
  const event = eventData.find((q) => q.id == id);

  const [modalShow, setModalShow] = useState(false);

  const mapStyles = {
    width: '70%',
    height: '50vh',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '20px', 
  };

  const markerPosition = {
    lat: event.address.location.lat,
    lng: event.address.location.lng,
  };

  const isEventExpired = new Date(event.endDate) < new Date();

  const boldText = {
    fontWeight: 'bold',
    fontSize: '1.2em',
  };

  const dateText = {
    fontSize: '1em', 
    color: isEventExpired ? 'red' : 'inherit', 
  };

  const buttonStyle = {
    backgroundColor: isEventExpired ? 'gray' : 'green',
    cursor: isEventExpired ? 'not-allowed' : 'pointer', 
    border: isEventExpired ? 'none' : 'inherit', 
  };

  const shareOnSocialMedia = (platform) => {
    const shareText = `Katıldığım etkinlik: ${event.eventName} ${event.description} - ${event.startDate} - ${event.address.city}, ${event.address.name}`;
    let shareLink = '';

    switch (platform) {
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(shareText)}`;
        break;
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(shareText)}`;
        break;
      case 'instagram':
        window.location.href = 'https://www.instagram.com/';
        return;
      default:
        break;
    }

    // Paylaşım linkini aç
    window.open(shareLink, '_blank');
  };


  return (
    <>
      <div style={{ width: '70%', margin: 'auto', textAlign: 'center' }}>
        <Carousel style={{ marginTop: '40px' }} data-bs-theme="light">
          {event.images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                style={{ height: '500px', width: '100%', objectFit: 'cover', borderRadius: '50px' }}
                src={`/images/${image}`}
                alt={`Slide ${index + 1}`}
              />
              <Carousel.Caption style={{ top: '20px' }}>
                {/* <h1>{event.category.type.name}</h1> */}
                {/* <p>{event.description}</p> */}
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div style={{ width: '70%', margin: 'auto', marginTop: '10px' }}>
        <Card>
          <Card.Body>
            <Card.Title>{event.eventName}</Card.Title>
            <Card.Text>{event.description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item style={{ ...boldText, ...dateText }}>{`Başlama Tarihi: ${event.startDate}`}</ListGroup.Item>
            <ListGroup.Item style={{ ...boldText, ...dateText }}>{`Bitiş Tarihi: ${event.endDate}`}</ListGroup.Item>
            <ListGroup.Item>{`Şehir: ${event.address.city}`}</ListGroup.Item>
            <ListGroup.Item>
             <Link to={`/event/address`}>
               {`Adres: ${event.address.name}`}
             </Link>
            </ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button style={buttonStyle} variant="success" disabled={isEventExpired} onClick={() => setModalShow(true) }>
            Bilet al
           </Button>
            <PriceModal show={modalShow} onHide={() => setModalShow(false)} event={event} />
          </Card.Body>
        </Card>
      </div>
      <div style={{ width: '70%', textAlign: 'center', display:'flex', justifyContent:'center', gap:20, margin:'auto', marginTop:'20px' }}>
        <Button variant="primary" onClick={() => shareOnSocialMedia('facebook')}>
          <FaFacebook /> Paylaş (Facebook)
        </Button>
        <Button variant="info" onClick={() => shareOnSocialMedia('twitter')}>
          <FaTwitter /> Paylaş (Twitter)
        </Button>
        <Button variant="danger" onClick={() => shareOnSocialMedia('instagram')}>
          <FaInstagram /> Paylaş (Instagram)
        </Button>
      </div>

      <div style={{ margin: 'auto', textAlign: 'center', width: '%50' }}>
        <Map
          google={props.google}
          zoom={15}
          style={mapStyles}
          initialCenter={markerPosition}
          center={markerPosition}
          // disableDefaultUI={true}
        >
          <Marker position={markerPosition} />
        </Map>
      </div>
      
    </>
  );
}

export default GoogleApiWrapper({
  apiKey: enums.GOOGLE_API_KEY,
})(EventDetail);
