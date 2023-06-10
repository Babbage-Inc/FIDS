// import React, { useState, useEffect } from "react";
// import TableRow from "./TableRow";

// const TableBody = ({ selectedOption }) => {
//   const [flights, setFlights] = useState(null);

//   const getFlights = () => {
//     fetch("http://localhost:8000/flights")
//       .then((response) => response.json())
//       .then((flights) => setFlights(Object.values(flights.data)))
//       .catch((err) => console.log(err));
//   };

//   useEffect(() => {
//     getFlights(); // Initial fetch

//     const interval = setInterval(() => {
//       getFlights(); // Fetch every 10 seconds
//     }, 10000);

//     return () => {
//       clearInterval(interval); // Cleanup interval on component unmount
//     };
//   }, []);

//   console.log(flights);

//   return (
//     <tbody>
//       {flights?.map((flight, _index) => (
//         <TableRow key={_index} flight={flight} />
//       ))}
//     </tbody>
//   );
// };

// export default TableBody;

import React, { useState, useEffect } from "react";
import TableRow from "./TableRow";

const TableBody = ({ selectedOption }) => {
  const [flights, setFlights] = useState(null);

  const getFlights = () => {
    let apiUrl = ""; // API endpoint variable

    if (selectedOption === "intl-arr") {
      apiUrl = "http://localhost:8000/international-arrival-api"; // Replace with the actual international arrival API endpoint
    } else if (selectedOption === "dom-arr") {
      apiUrl = "http://localhost:8000/domestic-arrival-api"; // Replace with the actual domestic arrival API endpoint
    } else if (selectedOption === "intl-dept") {
      apiUrl = "http://localhost:8000/international-departure-api"; // Replace with the actual international departure API endpoint
    } else if (selectedOption === "dom-dept") {
      apiUrl = "http://localhost:8000/domestic-departure-api"; // Replace with the actual domestic departure API endpoint
    }

    fetch(apiUrl)
      .then((response) => response.json())
      .then((flights) => setFlights(Object.values(flights.data)))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getFlights(); // Initial fetch

    const interval = setInterval(() => {
      getFlights(); // Fetch every 30 seconds
    }, 30000);

    return () => {
      clearInterval(interval); // Cleanup interval on component unmount
    };
  }, [selectedOption]); // Update the flights when selectedOption changes

  console.log(flights);

  return (
    <tbody>
      {flights?.map((flight, _index) => (
        <TableRow key={_index} flight={flight} />
      ))}
    </tbody>
  );
};

export default TableBody;
