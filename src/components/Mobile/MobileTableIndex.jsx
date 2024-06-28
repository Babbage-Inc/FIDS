import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './Navbar';
import WeatherContainer from './WeatherContainer';
import SelectButton from './SelectButton';
import FlightCard from './FlightCard';

const MobileTableIndex = () => {
  const [selectedOption, setSelectedOption] = useState('intl-arr');
  const [flights, setFlights] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const getFlights = useCallback(() => {
    let apiUrl = ''; // API endpoint variable

    if (selectedOption === 'intl-arr') {
      apiUrl = 'http://localhost:8000/international-arrival-api'; // Replace with the actual international arrival API endpoint
    } else if (selectedOption === 'dom-arr') {
      apiUrl = 'http://localhost:8000/domestic-arrival-api'; // Replace with the actual domestic arrival API endpoint
    } else if (selectedOption === 'intl-dept') {
      apiUrl = 'http://localhost:8000/international-departure-api'; // Replace with the actual international departure API endpoint
    } else if (selectedOption === 'dom-dept') {
      apiUrl = 'http://localhost:8000/domestic-departure-api'; // Replace with the actual domestic departure API endpoint
    }

    fetch(apiUrl)
      .then((response) => response.json())
      .then((flights) => setFlights(Object.values(flights.data)))
      .catch((err) => console.log(err));
  }, [selectedOption]);

  useEffect(() => {
    getFlights(); // Initial fetch

    const interval = setInterval(() => {
      getFlights(); // Fetch every 30 seconds
    }, 30000);

    return () => {
      clearInterval(interval); // Cleanup interval on component unmount
    };
  }, [selectedOption, getFlights]);

  console.log(flights);
  console.log(selectedOption);

  return (
    <div className="container">
      <Navbar />
      <WeatherContainer />
      <SelectButton
        selectedOption={selectedOption}
        handleOptionChange={handleOptionChange}
      />

      {flights?.map((flight, index) => (
        <FlightCard
          key={index}
          flight={flight}
          selectedOption={selectedOption}
        />
      ))}
    </div>
  );
};

export default MobileTableIndex;
