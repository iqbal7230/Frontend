
import React from 'react';

const EventFilters = ({ search, setSearch, dateFilter, setDateFilter }) => {
  return (
    <div className="flex gap-4 mb-6">
      <input
        type="text"
        placeholder="Search by event name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      />
      <input
        type="date"
        value={dateFilter}
        onChange={(e) => setDateFilter(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      />
    </div>
  );
};

export default EventFilters;
