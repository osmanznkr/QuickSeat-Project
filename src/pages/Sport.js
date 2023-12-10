import React from 'react';
import CardComponent from '../components/Card';

const Sport = ({ title, filterType, searchQuery, selectedDateRange }) => {
  let sportTitle;

  // filterType'a göre başlık belirle
  switch (filterType) {
    case 'football':
      sportTitle = 'Spor-Futbol';
      break;
    case 'basketball':
      sportTitle = 'Spor-Basketbol';
      break;
    case 'espor':
      sportTitle = 'Spor-E Spor';
      break;
    default:
      sportTitle = 'Spor';
      break;
  }

  return (
    <>
      <h1 className='titles'>{sportTitle}</h1>
      <CardComponent title={title} filterType={filterType} searchQuery={searchQuery} selectedDateRange={selectedDateRange} />
    </>
  );
};

export default Sport;
