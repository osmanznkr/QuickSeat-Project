import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import CardComponent from './Card'
import { DateRangePicker } from 'rsuite';
import tr_TR from "rsuite/locales/tr_TR";
import "rsuite/dist/rsuite.css";
import EventDetail from './EventDetail';
import FooterComponent from './Footer';
import FilteredPlaces from './FilteredPlaces';

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
                <Nav.Link as={Link} to="/events" onClick={() => handleCategorySelect('all')}>Tüm Etkinlikler</Nav.Link>
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
                  <NavDropdown.Item as={Link} to="/events" onClick={() => handleCategorySelect('sport')}>Hepsi</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/events" onClick={() => handleCategorySelect('football')}>
                    Futbol
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/events" onClick={() => handleCategorySelect('basketball')}>
                    Basketbol
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/events" onClick={() => handleCategorySelect('espor')}>
                    Espor
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
                <Nav.Link as={Link} to="/events" onClick={() => handleCategorySelect('outdated')}>Zamanı Geçmiş Etkinlikler</Nav.Link>
                <DateRangePicker placeholder="Tarih Aralığı Seçin" onChange={handleDateRangeSelect} locale={tr_TR.DateRangePicker} showOneCalendar />
              </Nav>
              <Form style={{ minWidth: 350 }} className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Etkinlik, şehir veya sanatçı arayın"
                  className="me-2"
                  aria-label="Search"
                  // value={searchQuery}
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
            <Route path="/event/address" element={<FilteredPlaces />} />
          </Routes>
          <Routes>
  <Route
    path="/events"
    element={
      <>
        {(selectedCategory === null || selectedCategory === 'all') && (
          <>
          <h1 className='titles'>Tüm Etkinlikler</h1>
            <CardComponent searchQuery={searchQuery} selectedDateRange={selectedDateRange}/>
          <h1 className='titles'>Müzik</h1>
            <CardComponent filterType="music" selectedDateRange={selectedDateRange} />
          <h1 className='titles'>Sahne</h1>
            <CardComponent filterType="stage" selectedDateRange={selectedDateRange}/>
          <h1 className='titles'>Sanat</h1>  
            <CardComponent filterType="art" selectedDateRange={selectedDateRange}/>
          <h1 className='titles'>Spor</h1>
            <CardComponent filterType="sport" selectedDateRange={selectedDateRange}/>
          </>
        )}
        {selectedCategory === 'music' && (
          <><h1 className='titles'>Müzik</h1><CardComponent filterType="music" searchQuery={searchQuery} selectedDateRange={selectedDateRange}/></>
        )}
        {selectedCategory === 'concert' && (
          <><div style={{display:'flex', alignItems:'end'}}><h1 className='titles'>Müzik</h1> <h2>-Konser</h2></div> <CardComponent filterType="concert" searchQuery={searchQuery} selectedDateRange={selectedDateRange}/></>
        )}
        {selectedCategory === 'festival' && (
          <><div style={{display:'flex', alignItems:'end'}}><h1 className='titles'>Müzik</h1> <h2>-Festival</h2></div> <CardComponent filterType="festival" searchQuery={searchQuery} selectedDateRange={selectedDateRange}/></>
        )}
        {selectedCategory === 'stage' && (
          <><h1 className='titles'>Sahne</h1><CardComponent filterType="stage" searchQuery={searchQuery} selectedDateRange={selectedDateRange}/></>
        )}
        {selectedCategory === 'theater' && (
          <><div style={{display:'flex', alignItems:'end'}}><h1 className='titles'>Sahne</h1> <h2>-Tiyatro</h2></div> <CardComponent filterType="theater" searchQuery={searchQuery} selectedDateRange={selectedDateRange}/></>
        )}
        {selectedCategory === 'standup' && (
          <><div style={{display:'flex', alignItems:'end'}}><h1 className='titles'>Sahne</h1> <h2>-Stand Up</h2></div> <CardComponent filterType="standup" searchQuery={searchQuery} selectedDateRange={selectedDateRange}/></>
        )}
        {selectedCategory === 'sport' && (
          <><h1 className='titles'>Spor</h1><CardComponent filterType="sport" searchQuery={searchQuery} selectedDateRange={selectedDateRange}/></>
        )}
        {selectedCategory === 'football' && (
          <><div style={{display:'flex', alignItems:'end'}}><h1 className='titles'>Spor</h1> <h2>-Futbol</h2></div> <CardComponent filterType="football" searchQuery={searchQuery} selectedDateRange={selectedDateRange}/></>
        )}
        {selectedCategory === 'basketball' && (
          <><div style={{display:'flex', alignItems:'end'}}><h1 className='titles'>Spor</h1> <h2>-Basketbol</h2></div> <CardComponent filterType="basketball" searchQuery={searchQuery} selectedDateRange={selectedDateRange}/></>
        )}
        {selectedCategory === 'espor' && (
          <><div style={{display:'flex', alignItems:'end'}}><h1 className='titles'>Spor</h1> <h2>-Espor</h2></div> <CardComponent filterType="espor" searchQuery={searchQuery} selectedDateRange={selectedDateRange}/></>
        )}
        {selectedCategory === 'art' && (
          <><h1 className='titles'>Sanat</h1><CardComponent filterType="art" searchQuery={searchQuery} selectedDateRange={selectedDateRange}/></>
        )}
        {selectedCategory === 'painting' && (
          <><div style={{display:'flex', alignItems:'end'}}><h1 className='titles'>Sanat</h1> <h2>-Resim</h2></div> <CardComponent filterType="painting"searchQuery={searchQuery} selectedDateRange={selectedDateRange} /></>
        )}
        {selectedCategory === 'sculpture' && (
          <><div style={{display:'flex', alignItems:'end'}}><h1 className='titles'>Sanat</h1> <h2>-Heykel</h2></div> <CardComponent filterType="sculpture" searchQuery={searchQuery} selectedDateRange={selectedDateRange}/></>
        )}
         {selectedCategory === 'outdated' && (
          <><h1 className='titles'>Zamanı Geçmiş Etkinlikler</h1><CardComponent filterType="outdated" searchQuery={searchQuery} selectedDateRange={selectedDateRange}/></>
        )}
        
      </>
    }
  />
</Routes>
        </div>
      </Router>
      <FooterComponent></FooterComponent>
    </>
  );
}

export default NavbarComponent;
