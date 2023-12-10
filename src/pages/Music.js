import React from 'react';
import CardComponent from '../components/Card';

const Music = ({ title, filterType, searchQuery, selectedDateRange }) => {
  let musicTitle;


  switch (filterType) {
    case 'festival':
      musicTitle = 'Müzik-Festival';
      break;

    case 'concert':
      musicTitle = 'Müzik-Konser';
      break;
      
    default:
      musicTitle = 'Müzik';
      break;
  }

  return (
    <>
      <h1 className='titles'>{musicTitle}</h1>
      <CardComponent title={title} filterType={filterType} searchQuery={searchQuery} selectedDateRange={selectedDateRange} />
    </>
  );
};

export default Music;
