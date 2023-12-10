import React from 'react';
import CardComponent from '../components/Card';

const Art = ({ title, filterType, searchQuery, selectedDateRange }) => {
  let artTitle;

  // filterType'a göre başlık belirle
  switch (filterType) {
    case 'painting':
      artTitle = 'Sanat-Resim';
      break;
    case 'sculpture':
      artTitle = 'Sanat-Heykel';
      break;
    default:
      artTitle = 'Sanat';
      break;
  }

  return (
    <>
      <h1 className='titles'>{artTitle}</h1>
      <CardComponent title={title} filterType={filterType} searchQuery={searchQuery} selectedDateRange={selectedDateRange} />
    </>
  );
};

export default Art;
