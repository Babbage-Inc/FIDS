import React, { useState } from "react";
import Navbar from "./Navbar";
import WeatherContainer from "./WeatherContainer";
import SelectButton from "./SelectButton";
import FlightCard from "./FlightCard";

const MobileTableIndex = () => {
  const [selectedOption, setSelectedOption] = useState("intl-arr");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  console.log(selectedOption);

  return (
    <div className="container">
      <Navbar />
      <WeatherContainer />
      <SelectButton
        selectedOption={selectedOption}
        handleOptionChange={handleOptionChange}
      />
      <FlightCard selectedOption={selectedOption} />
    </div>
  );
};

export default MobileTableIndex;
