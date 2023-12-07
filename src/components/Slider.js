import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel style={{ marginTop: '40px', textAlign: 'center' }} data-bs-theme="light">
            <Carousel.Item>
        <img
          style={{ height: '600px', width: '95%', objectFit: 'cover', borderRadius: '50px' }}
          src="https://images7.alphacoders.com/133/1339451.png"
          alt="First slide"
        />
        <Carousel.Caption style={{ top: '20px' }}>
          <h1>Müzik</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: '600px', width: '95%', objectFit: 'cover', borderRadius: '50px' }}
          src="https://hmt.com.au/wp-content/uploads/2022/02/hmt_home-aud2022.png"
          alt="Second slide"
        />
        <Carousel.Caption style={{ top: '20px' }}>
          <h1>Sahne</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: '600px', width: '95%', objectFit: 'cover', borderRadius: '50px' }}
          src="https://media.licdn.com/dms/image/C4D1BAQFnzQdg2yjq2A/company-background_10000/0/1583653031332/reformsports_cover?e=2147483647&v=beta&t=MeAUK44PVDgCEh-ZG9BuTVg0C8ChNFMYPhDl4urhikU"
          alt="Third slide"
        />
        <Carousel.Caption style={{ top: '20px' }}>
          <h1>Spor</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: '600px', width: '95%', objectFit: 'cover', borderRadius: '50px' }}
          src="https://www.artopol.com/images/blog/online-sanat-galerisi.jpeg"
          alt="Fourth slide"
        />
        <Carousel.Caption style={{ top: '20px' }}>
          <h1>Sanat</h1>
        </Carousel.Caption>
      </Carousel.Item>



    </Carousel>
  );
}

export default Slider;
