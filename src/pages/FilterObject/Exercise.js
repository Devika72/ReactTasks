import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FilterableList = () => {
  const [filterValue, setFilterValue] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from JSONPlaceholder
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Run once on component mount

  // Filter the data based on the input value
  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div>
      {/* Input field for filtering */}
      <input
        type="text"
        placeholder="Filter by name"
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
      />

      {/* Display filtered data */}
      <ul>
        {filteredData.map(item => (
          <li key={item.id}>
            {`ID: ${item.id}, Name: ${item.name}, Email: ${item.email}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterableList;
