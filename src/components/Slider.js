import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel style={{ marginTop: '40px', textAlign: 'center' }} data-bs-theme="light">
      <Carousel.Item>
        <img
          style={{ height: '600px', width: '95%', objectFit: 'cover', borderRadius: '50px' }}
          src="https://img.aydinlik.com.tr/rcman/Cw1280h720q95gc/storage/files/images/2023/03/18/sehir-tiyatrolari-dunya-tiyatro-gununde-9-oyunu-ucretsiz-sahneleyecek-yHYW.jpg"
          alt="First slide"
        />
        <Carousel.Caption style={{ top: '20px' }}>
          <h1>Sanat</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: '600px', width: '95%', objectFit: 'cover', borderRadius: '50px' }}
          src="https://www.ekoturk.com/wp-content/uploads/2020/04/abddeki-sinema-salonlari-bir-daha-hic-dolmayabilir.jpg"
          alt="Second slide"
        />
        <Carousel.Caption style={{ top: '20px' }}>
          <h1>Sahne</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: '600px', width: '95%', objectFit: 'cover', borderRadius: '50px' }}
          src="https://www.yesilay.org.tr/assets/uploads/makaleler/dijital-oyun-nasil-e-spor-oldu-02.jpg"
          alt="Third slide"
        />
        <Carousel.Caption style={{ top: '20px' }}>
          <h1>E Spor</h1>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
