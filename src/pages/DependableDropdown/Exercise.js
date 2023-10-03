import React, { useState } from 'react';

const DropdownForm = () => {
  // Static data for demonstration purposes
  const statesData = ['State 1', 'State 2', 'State 3'];
  const districtsData = {
    'State 1': ['District 1A', 'District 1B'],
    'State 2': ['District 2A', 'District 2B'],
    'State 3': ['District 3A', 'District 3B'],
  };
  const citiesData = {
    'District 1A': ['City 1A1', 'City 1A2'],
    'District 1B': ['City 1B1', 'City 1B2'],
    'District 2A': ['City 2A1', 'City 2A2'],
    'District 2B': ['City 2B1', 'City 2B2'],
    'District 3A': ['City 3A1', 'City 3A2'],
    'District 3B': ['City 3B1', 'City 3B2'],
  };

  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedDistrict(''); // Reset district when state changes
    setSelectedCity(''); // Reset city when state changes
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
    setSelectedCity(''); // Reset city when district changes
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Selected State:', selectedState);
    console.log('Selected District:', selectedDistrict);
    console.log('Selected City:', selectedCity);
  };

  return (
    <div>
      <h1>Dependent Dropdowns</h1>
      <form onSubmit={handleSubmit}>
        <label>
          State:
          <select value={selectedState} onChange={handleStateChange}>
            <option value="">Select State</option>
            {statesData.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </label>

        <label>
          District:
          <select value={selectedDistrict} onChange={handleDistrictChange} disabled={!selectedState}>
            <option value="">Select District</option>
            {selectedState && districtsData[selectedState].map(district => (
              <option key={district} value={district}>{district}</option>
            ))}
          </select>
        </label>

        <label>
          City:
          <select value={selectedCity} onChange={handleCityChange} disabled={!selectedDistrict}>
            <option value="">Select City</option>
            {selectedDistrict && citiesData[selectedDistrict].map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DropdownForm;
