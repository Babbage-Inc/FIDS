import React from "react";

const FlightCard = ({ flight, selectedOption }) => {
  console.log(flight);
  return (
    <div className="flight-card">
      <div className="flight-card__header">
        <div className="flight-header--left">
          <h2>{flight.flightNumber}</h2>
          <span className="airlines-name">{flight.airlines}</span>
        </div>
        <div className="flight-header--right">
          <span
            className="status"
            style={{
              background: flight.status === "CANCELLED" ? "red" : "#35D635",
              color: "white",
              padding: "0.2rem 0.5rem",
              borderRadius: "10px",
            }}
          >
            {flight.status}
          </span>
        </div>
      </div>
      <div className="flight-card__body">
        <table className="flight-card__body--table">
          <tr>
            <td>
              <p className="table-heading">ORIGIN</p>
              <p>{flight.destination}</p>
            </td>
            <td>
              <p className="table-heading">
                {selectedOption === "intl-arr" || selectedOption === "dom-arr"
                  ? "STA"
                  : "STD"}
              </p>

              <p>
                {selectedOption === "intl-arr" || selectedOption === "dom-arr"
                  ? flight.arriving
                  : flight.departing}
              </p>
            </td>
            <td>
              <p className="table-heading">
                {selectedOption === "intl-arr" || selectedOption === "dom-arr"
                  ? "ATA"
                  : "Gate"}
              </p>
              <p>
                {selectedOption === "intl-arr" || selectedOption === "dom-arr"
                  ? flight.ata
                  : flight.gate}
              </p>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default FlightCard;
