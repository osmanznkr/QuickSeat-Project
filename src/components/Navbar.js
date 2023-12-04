import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Events from './Events';

function NavbarComponent() {

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Router>
        <Navbar bg="dark" variant='dark' expand="lg">
          <Container fluid>
            <Navbar.Brand href="/"> QUICK SEAT </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-2"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link as={Link} to="/events" onClick={() => handleCategorySelect()}>Tüm Etkinlikler</Nav.Link>
                <NavDropdown title="Müzik" id="navbarScrollingDropdown">
                  <NavDropdown.Item as={Link} to="/events" onClick={() => handleCategorySelect('music')}>
                    Hepsi
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/events" onClick={() => handleCategorySelect('concert')}>
                    Konser
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/events" onClick={() => handleCategorySelect('festival')}>
                    Festival
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Sahne" id="navbarScrollingDropdown">
                  <NavDropdown.Item as={Link} to="/events" onClick={() => handleCategorySelect('stage')}>Hepsi</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/events" onClick={() => handleCategorySelect('theater')}>
                    Tiyatro
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/events" onClick={() => handleCategorySelect('standup')}>
                    Stand Up
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Spor" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Hepsi</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action4">
                    Futbol
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action6">
                    Basketbol
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action6">
                    E Spor
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Sanat" id="navbarScrollingDropdown">
                  <NavDropdown.Item as={Link} to="/events" onClick={() => handleCategorySelect('art')}>Hepsi</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/events" onClick={() => handleCategorySelect('painting')}>
                    Resim
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/events" onClick={() => handleCategorySelect('sculpture')}>
                    Heykel
                  </NavDropdown.Item>
                </NavDropdown>
                {/* <Nav.Link className='ml-auto' as={Link} to={"/events"}>Zamanı Geçmiş Etkinlikler</Nav.Link> */}
              </Nav>
              <Form style={{ minWidth: 350 }} className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Etkinlik, şehir veya sanatçı arayın"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Ara</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div>
             <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route
          path="/events"
          element={<Events selectedCategory={selectedCategory} />}
        />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default NavbarComponent;
