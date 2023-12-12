import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from '../pages/Home';
import { DateRangePicker } from 'rsuite';
import tr_TR from "rsuite/locales/tr_TR";
import "rsuite/dist/rsuite.css";
import EventDetail from '../pages/EventDetail';
import Events from '../pages/Events';
import Music from '../pages/Music';
import Stage from '../pages/Stage';
import Sport from '../pages/Sport';
import Art from '../pages/Art';
import Outdated from '../pages/Outdated';
import FilteredPlaces from '../pages/FilteredPlaces';

function NavbarComponent() {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDateRange, setSelectedDateRange] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleDateRangeSelect = (dates) => {
    setSelectedDateRange(dates);
  };
  

  useEffect(() => {
    console.log('Search query changed:', searchQuery);
    console.log('date changed: ', selectedDateRange);
  }, [searchQuery, selectedDateRange]);


  return (
    <>
      <Router>
        <Navbar bg="dark" variant='dark' expand="lg" >
          <Container fluid>
            <Navbar.Brand as={Link} to="/">
              <img style={{objectFit:'cover', width:'180px', height:'40px'}}
                src="/logo/qSLogoLast.png" 
                className="d-inline-block align-center"
                alt="Quick Seat Logo"
              />
              {/* {' QUICK SEAT'} */}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-2"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link as={Link} to="/events" onClick={() => handleCategorySelect('all')}>Tüm Etkinlikler</Nav.Link>
                <NavDropdown title="Müzik" id="navbarScrollingDropdown">
                  <NavDropdown.Item as={Link} to="/events-music" onClick={() => handleCategorySelect('music')}>
                    Hepsi
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/events-music" onClick={() => handleCategorySelect('concert')}>
                    Konser
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/events-music" onClick={() => handleCategorySelect('festival')}>
                    Festival
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Sahne" id="navbarScrollingDropdown">
                  <NavDropdown.Item as={Link} to="/events-stage" onClick={() => handleCategorySelect('stage')}>Hepsi</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/events-stage" onClick={() => handleCategorySelect('theater')}>
                    Tiyatro
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/events-stage" onClick={() => handleCategorySelect('standup')}>
                    Stand Up
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Spor" id="navbarScrollingDropdown">
                  <NavDropdown.Item as={Link} to="/events-sport" onClick={() => handleCategorySelect('sport')}>Hepsi</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/events-sport" onClick={() => handleCategorySelect('football')}>
                    Futbol
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/events-sport" onClick={() => handleCategorySelect('basketball')}>
                    Basketbol
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/events-sport" onClick={() => handleCategorySelect('espor')}>
                    ESpor
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Sanat" id="navbarScrollingDropdown">
                  <NavDropdown.Item as={Link} to="/events-art" onClick={() => handleCategorySelect('art')}>Hepsi</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/events-art" onClick={() => handleCategorySelect('painting')}>
                    Resim
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/events-art" onClick={() => handleCategorySelect('sculpture')}>
                    Heykel
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/events-outdated" onClick={() => handleCategorySelect('outdated')}>Zamanı Geçmiş Etkinlikler</Nav.Link>
                <DateRangePicker placeholder="Tarih Aralığı Seçin" onChange={handleDateRangeSelect} locale={tr_TR.DateRangePicker} showOneCalendar />
              </Nav>
              <Form style={{ minWidth: 350 }} className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Etkinlik, şehir veya sanatçı arayın"
                  className="me-2"
                  aria-label="Search"
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button variant="outline-success">Ara</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event/:id" element={<EventDetail />} />
            <Route path="/event-address" element={<FilteredPlaces />} />
            <Route path="/events" element={<Events title={selectedCategory} filterType={selectedCategory ? selectedCategory.toLowerCase() : 'all'} searchQuery={searchQuery} selectedDateRange={selectedDateRange} />} />
            <Route path="/events-music" element={<Music title={selectedCategory} filterType={selectedCategory ? selectedCategory.toLowerCase() : 'all'} searchQuery={searchQuery} selectedDateRange={selectedDateRange} />} />
            <Route path="/events-stage" element={<Stage title={selectedCategory} filterType={selectedCategory ? selectedCategory.toLowerCase() : 'all'} searchQuery={searchQuery} selectedDateRange={selectedDateRange} />} />
            <Route path="/events-sport" element={<Sport title={selectedCategory} filterType={selectedCategory ? selectedCategory.toLowerCase() : 'all'} searchQuery={searchQuery} selectedDateRange={selectedDateRange} />} />
            <Route path="/events-art" element={<Art title={selectedCategory} filterType={selectedCategory ? selectedCategory.toLowerCase() : 'all'} searchQuery={searchQuery} selectedDateRange={selectedDateRange} />} />
            <Route path="/events-outdated" element={<Outdated title={selectedCategory} filterType={selectedCategory ? selectedCategory.toLowerCase() : 'all'} searchQuery={searchQuery} selectedDateRange={selectedDateRange} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default NavbarComponent;