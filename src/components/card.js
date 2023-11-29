import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function CardComponent() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://esenler.bel.tr/wp-content/uploads/2021/08/144438347-1600775959586-gfhfghfgh.jpg" />
      <Card.Body>
        <Card.Title>Etkinlik Adı</Card.Title>
        <Card.Text>
          Açıklama 
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Etkinlik Detayı</Card.Link>
        <Card.Link href="#">Bilet al</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;