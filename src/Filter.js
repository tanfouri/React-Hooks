// Filter.js
import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const handleFilter = () => {
    onFilter({ title: titleFilter, rating: ratingFilter });
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={ratingFilter}
        onChange={(e) => setRatingFilter(e.target.value)}
      />
      <button onClick={handleFilter}>Apply Filter</button>
    </div>
  );
};

export default Filter;
