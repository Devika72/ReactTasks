import React, { useState } from 'react';

const ElementList = () => {
  const [inputValue, setInputValue] = useState('');
  const elements = [
    'Arrays',
    'Lists',
    'Pointers',
    'Unions',
    'arrays-2D',
    'Lists in lists',
  ];

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const filteredElements = elements.filter((element) =>
    element.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div>
      <h2>Search Elements</h2>
      <input
        type="text"
        placeholder="Search element..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <ul>
        {filteredElements.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </div>
  );
};

export default ElementList;
