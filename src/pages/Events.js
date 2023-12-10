import React from 'react';
import CardComponent from '../components/Card';

const Events = ({ title, filterType, searchQuery, selectedDateRange }) => (
  <>
    <h1 className='titles'>Tüm Etkinlikler</h1>
    <CardComponent title={title}  searchQuery={searchQuery} selectedDateRange={selectedDateRange} />
    <h1 className='titles'>Müzik</h1>
    <CardComponent title={title} filterType="music" searchQuery={searchQuery} selectedDateRange={selectedDateRange} />
    <h1 className='titles'>Sahne</h1>
    <CardComponent title={title} filterType="stage" searchQuery={searchQuery} selectedDateRange={selectedDateRange} />
    <h1 className='titles'>Spor</h1>
    <CardComponent title={title} filterType="sport" searchQuery={searchQuery} selectedDateRange={selectedDateRange} />
    <h1 className='titles'>Sanat</h1>
    <CardComponent title={title} filterType="art" searchQuery={searchQuery} selectedDateRange={selectedDateRange} />
  </>
);

export default Events;