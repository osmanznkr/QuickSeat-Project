import React from 'react';
import { useParams } from 'react-router-dom';
import eventData from '../data/Events.json';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { enums } from '../store/enums';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import PriceModal from './PriceModal';


function EventDetail(props) {
  const { id } = useParams();
  const event = eventData.find((q) => q.id == id);

  const [modalShow, setModalShow] = useState(false);

  const mapStyles = {
    width: '70vh',
    height: '50vh',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '20px', 
  };

  const markerPosition = {
    lat: 38.726785,
    lng: 35.506347,
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
            <ListGroup.Item>{`Adres: ${event.address.name}`}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button style={buttonStyle} variant="success" disabled={isEventExpired} onClick={() => setModalShow(true) }>
            Bilet al
           </Button>
            <PriceModal show={modalShow} onHide={() => setModalShow(false)} event={event} />
          </Card.Body>
        </Card>
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
