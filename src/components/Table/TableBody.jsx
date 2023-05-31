import React, { useState, useEffect } from "react";
import TableRow from "./TableRow";

const TableBody = () => {
  const [flights, setFlights] = useState(null);

  const getFlights = () => {
    fetch("http://localhost:8000/flights")
      .then((response) => response.json())
      .then((flights) => setFlights(Object.values(flights.data)))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getFlights(); // Initial fetch

    const interval = setInterval(() => {
      getFlights(); // Fetch every 10 seconds
    }, 10000);

    return () => {
      clearInterval(interval); // Cleanup interval on component unmount
    };
  }, []);

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
