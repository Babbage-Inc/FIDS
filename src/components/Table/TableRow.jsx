import React, { useState, useEffect } from "react";
import TableCell from "./TableCell";

const TableRow = ({ flight, selectedOption }) => {
  const [previousFlight, setPreviousFlight] = useState(flight);
  const words = Object.values(flight);
  console.log(words);

  useEffect(() => {
    // Compare the new 'flight' data with the previous data
    // Update the 'previousFlight' state if there are changes
    if (JSON.stringify(flight) !== JSON.stringify(previousFlight)) {
      setPreviousFlight(flight);
    }
  }, [flight, previousFlight]);

  return (
    <tr>
      {/* {words?.map((word, index) => {
        // Conditionally render the TableCell component based on changes in 'word'
        if (word !== previousFlight[index]) {
          return (
            <TableCell
              key={index}
              word={word}
              flight={flight}
              selectedOption={selectedOption}
            />
          );
        }
        return null;
      })} */}

      <TableCell word={words} flight={flight} selectedOption={selectedOption} />
    </tr>
  );
};

export default TableRow;
