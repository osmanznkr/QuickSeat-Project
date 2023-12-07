import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function PriceModal(props) {
  const { event, onHide } = props;

  const ticketTypeOptions = Object.entries(event.ticketType).map(([type, label]) => (
    <option key={type} value={type}>
      {`${label}`}
    </option>
  ));


  const onConfirm = () => {

    alert('Başarılı! Bilet seçimi onaylandı.');

    onHide();
  };

  return (
    <Modal centered size='md' {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Bilet Seçimi Yapın
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
          <Form.Select aria-label="Default select example">
            {ticketTypeOptions}
          </Form.Select>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='danger' onClick={onHide}>Kapat</Button>
        <Button variant="success" onClick = {onConfirm}>Onayla</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PriceModal;
