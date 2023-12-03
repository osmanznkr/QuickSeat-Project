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

function CardComponent() {

   const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
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

  return <>
  <Slider style={{margin: '20px 20px'}} {...settings}>
    <div className='cardSlick'>
    <div className='card-top'>
      <img src='https://esenler.bel.tr/wp-content/uploads/2021/08/144438347-1600775959586-gfhfghfgh.jpg'></img>
      <h2>Tiyatro Oyunu</h2>
    </div>
    <div className='card-bottom-buy'>
        <h4>599₺</h4>
        <Button size='sm' variant='outline-success' style={{borderRadius: '20px'}} >Etkinlik Detayı</Button>
    </div>
    <div className='card-bottom'>
      <p>5 Aralık 2023 Perşembe</p>
    </div>
  </div>
  <div className='cardSlick'>
    <div className='card-top'>
      <img src='https://picsum.photos/200/300'></img>
      <h2>Tiyatro Oyunu</h2>
    </div>
    <div className='card-bottom-buy'>
        <h4>599₺</h4>
        <Button size='sm' variant='outline-success' style={{borderRadius: '20px'}} >Etkinlik Detayı</Button>
      </div>
    <div className='card-bottom'>
      <p>5 Aralık 2023 Perşembe</p>
    </div>
  </div>
  <div className='cardSlick'>
    <div className='card-top'>
      <img src='https://picsum.photos/300/400'></img>
      <h2>Tiyatro Oyunu</h2>
    </div>
    <div className='card-bottom-buy'>
        <h4>599₺</h4>
        <Button size='sm' variant='outline-success' style={{borderRadius: '20px'}} >Etkinlik Detayı</Button>
      </div>
    <div className='card-bottom'>
      <p>5 Aralık 2023 Perşembe</p>
    </div>
  </div>
  <div className='cardSlick'>
    <div className='card-top'>
      <img src='https://picsum.photos/400/500'></img>
      <h2>Tiyatro Oyunu</h2>
    </div>
    <div className='card-bottom-buy'>
        <h4>599₺</h4>
        <Button size='sm' variant='outline-success' style={{borderRadius: '20px'}} >Etkinlik Detayı</Button>
      </div>
    <div className='card-bottom'>
      <p>5 Aralık 2023 Perşembe</p>
    </div>
  </div>
  <div className='cardSlick'>
    <div className='card-top'>
      <img src='https://picsum.photos/700/800'></img>
      <h2>Tiyatro Oyunu</h2>
    </div>
    <div className='card-bottom-buy'>
        <h4>599₺</h4>
        <Button size='sm' variant='outline-success' style={{borderRadius: '20px'}} >Etkinlik Detayı</Button>
      </div>
    <div className='card-bottom'>
      <p>5 Aralık 2023 Perşembe</p>
    </div>
  </div>
  <div className='cardSlick'>
    <div className='card-top'>
      <img src='https://picsum.photos/200/300'></img>
      <h2>Tiyatro Oyunu</h2>
    </div>
    <div className='card-bottom-buy'>
        <h4>599₺</h4>
        <Button size='sm' variant='outline-success' style={{borderRadius: '20px'}} >Etkinlik Detayı</Button>
      </div>
    <div className='card-bottom'>
      <p>5 Aralık 2023 Perşembe</p>
    </div>
  </div>
  <div className='cardSlick'>
    <div className='card-top'>
      <img src='https://picsum.photos/700/800'></img>
      <h2>Tiyatro Oyunu</h2>
    </div>
    <div className='card-bottom-buy'>
        <h4>599₺</h4>
        <Button size='sm' variant='outline-success' style={{borderRadius: '20px'}} >Etkinlik Detayı</Button>
      </div>
    <div className='card-bottom'>
      <p>5 Aralık 2023 Perşembe</p>
    </div>
  </div>
  <div className='cardSlick'>
    <div className='card-top'>
      <img src='https://picsum.photos/200/300'></img>
      <h2>Tiyatro Oyunu</h2>
    </div>
    <div className='card-bottom-buy'>
        <h4>599₺</h4>
        <Button size='sm' variant='outline-success' style={{borderRadius: '20px'}} >Etkinlik Detayı</Button>
      </div>
    <div className='card-bottom'>
      <p>5 Aralık 2023 Perşembe</p>
    </div>
  </div>
  <div className='cardSlick'>
    <div className='card-top'>
      <img src='https://picsum.photos/200/300'></img>
      <h2>Tiyatro Oyunu</h2>
    </div>
    <div className='card-bottom-buy'>
        <h4>599₺</h4>
        <Button size='sm' variant='outline-success' style={{borderRadius: '20px'}} >Etkinlik Detayı</Button>
      </div>
    <div className='card-bottom'>
      <p>5 Aralık 2023 Perşembe</p>
    </div>
  </div>
  <div className='cardSlick'>
    <div className='card-top'>
      <img src='https://picsum.photos/200/300'></img>
      <h2>Tiyatro Oyunu</h2>
    </div>
    <div className='card-bottom-buy'>
        <h4>599₺</h4>
        <Button size='sm' variant='outline-success' style={{borderRadius: '20px'}} >Etkinlik Detayı</Button>
      </div>
    <div className='card-bottom'>
      <p>5 Aralık 2023 Perşembe</p>
    </div>
  </div>
  <div className='cardSlick'>
    <div className='card-top'>
      <img src='https://picsum.photos/300/400'></img>
      <h2>Tiyatro Oyunu</h2>
    </div>
    <div className='card-bottom-buy'>
        <h4>599₺</h4>
        <Button size='sm' variant='outline-success' style={{borderRadius: '20px'}} >Etkinlik Detayı</Button>
      </div>
    <div className='card-bottom'>
      <p>5 Aralık 2023 Perşembe</p>
    </div>
  </div>
  <div className='cardSlick'>
    <div className='card-top'>
      <img src='https://picsum.photos/200/300'></img>
      <h2>Tiyatro Oyunu</h2>
    </div>
    <div className='card-bottom-buy'>
        <h4>599₺</h4>
        <Button size='sm' variant='outline-success' style={{borderRadius: '20px'}} >Etkinlik Detayı</Button>
      </div>
    <div className='card-bottom'>
      <p>5 Aralık 2023 Perşembe</p>
    </div>
  </div>
  <div className='cardSlick'>
    <div className='card-top'>
      <img src='https://picsum.photos/200/300'></img>
      <h2>Tiyatro Oyunu</h2>
    </div>
    <div className='card-bottom-buy'>
        <h4>599₺</h4>
        <Button size='sm' variant='outline-success' style={{borderRadius: '20px'}} >Etkinlik Detayı</Button>
      </div>
    <div className='card-bottom'>
      <p>5 Aralık 2023 Perşembe</p>
    </div>
  </div>
  <div className='cardSlick'>
    <div className='card-top'>
      <img src='https://picsum.photos/200/300'></img>
      <h2>Tiyatro Oyunu</h2>
    </div>
    <div className='card-bottom-buy'>
        <h4>599₺</h4>
        <Button size='sm' variant='outline-success' style={{borderRadius: '20px'}} >Etkinlik Detayı</Button>
      </div>
    <div className='card-bottom'>
      <p>5 Aralık 2023 Perşembe</p>
    </div>
  </div>
  <div className='cardSlick'>
    <div className='card-top'>
      <img src='https://picsum.photos/200/300'></img>
      <h2>Tiyatro Oyunu</h2>
    </div>
    <div className='card-bottom-buy'>
        <h4>599₺</h4>
        <Button size='sm' variant='outline-success' style={{borderRadius: '20px'}} >Etkinlik Detayı</Button>
      </div>
    <div className='card-bottom'>
      <p>5 Aralık 2023 Perşembe</p>
    </div>
  </div>
  <div className='cardSlick'>
    <div className='card-top'>
      <img src='https://picsum.photos/200/300'></img>
      <h2>Tiyatro Oyunu</h2>
    </div>
    <div className='card-bottom-buy'>
        <h4>599₺</h4>
        <Button size='sm' variant='outline-success' style={{borderRadius: '20px'}} >Etkinlik Detayı</Button>
      </div>
    <div className='card-bottom'>
      <p>5 Aralık 2023 Perşembe</p>
    </div>
  </div>
  <div className='cardSlick'>
    <div className='card-top'>
      <img src='https://esenler.bel.tr/wp-content/uploads/2021/08/144438347-1600775959586-gfhfghfgh.jpg'></img>
      <h2>Tiyatro Oyunu</h2>
    </div>
    <div className='card-bottom-buy'>
        <h4>599₺</h4>
        <Button size='sm' variant='outline-success' style={{borderRadius: '20px'}} >Etkinlik Detayı</Button>
      </div>
    <div className='card-bottom'>
      <p>5 Aralık 2023 Perşembe</p>
    </div>
  </div>
  <div className='cardSlick'>
    <div className='card-top'>
      <img src='https://esenler.bel.tr/wp-content/uploads/2021/08/144438347-1600775959586-gfhfghfgh.jpg'></img>
      <h2>Tiyatro Oyunu</h2>
    </div>
    <div className='card-bottom-buy'>
        <h4>599₺</h4>
        <Button size='sm' variant='outline-success' style={{borderRadius: '20px'}} >Etkinlik Detayı</Button>
      </div>
    <div className='card-bottom'>
      <p>5 Aralık 2023 Perşembe</p>
    </div>
  </div>
  </Slider>
  </>








//'https://picsum.photos/200/300'

//   return (
//     <Card style={{ width: '18rem' }} className="custom-card">
//       <div className="image-container">
//         <Card.Img variant="top" src="https://esenler.bel.tr/wp-content/uploads/2021/08/144438347-1600775959586-gfhfghfgh.jpg" />
//       </div>
//       <Card.Body>
//         <Card.Title>Manga Konseri</Card.Title>
//         Açıklama
//       </Card.Body>
//       <ListGroup className="list-group-flush">
//         <ListGroup.Item>Cras justo odio</ListGroup.Item>
//         <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
//         <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
//       </ListGroup>
//       <Card.Body className="card-footer">
//         <Card.Link href="#">Etkinlik Detayı</Card.Link>
//         <Card.Link href="#">Bilet al</Card.Link>
//       </Card.Body>
//     </Card>
//   );
}

export default CardComponent;



// https://esenler.bel.tr/wp-content/uploads/2021/08/144438347-1600775959586-gfhfghfgh.jpg