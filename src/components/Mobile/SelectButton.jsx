import React from "react";

const SelectButton = ({ selectedOption, handleOptionChange }) => {
  return (
    <div className="dropdown-section">
      <select
        className="dropdown-btn"
        id="option-btn"
        name="option-btn"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <option value="intl-arr">International Arrival</option>
        <option value="dom-arr">Domestic Arrival</option>
        <option value="intl-dept">International Departure</option>
        <option value="dom-dept">Domestic Departure</option>
      </select>
    </div>
  );
};

export default SelectButton;
