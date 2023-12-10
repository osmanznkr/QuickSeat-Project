import React from 'react';
import CardComponent from '../components/Card';

const Stage = ({ title, filterType, searchQuery, selectedDateRange }) => {
  let stageTitle;

  // filterType'a göre başlık belirle
  switch (filterType) {
    case 'theater':
      stageTitle = 'Sahne-Tiyatro';
      break;
    case 'standup':
      stageTitle = 'Sahne-Stand Up';
      break;
    default:
      stageTitle = 'Sahne';
      break;
  }

  return (
    <>
      <h1 className='titles'>{stageTitle}</h1>
      <CardComponent title={title} filterType={filterType} searchQuery={searchQuery} selectedDateRange={selectedDateRange} />
    </>
  );
};

export default Stage;
