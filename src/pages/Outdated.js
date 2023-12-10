import React from 'react';
import CardComponent from '../components/Card';

const Outdated = ({ title, filterType, searchQuery, selectedDateRange }) => (
  <>
    <h1 className='titles'>Zamanı Geçmiş Etkinlikler</h1>
    <CardComponent title={title} filterType={filterType} searchQuery={searchQuery} selectedDateRange={selectedDateRange} />
  </>
);

export default Outdated;