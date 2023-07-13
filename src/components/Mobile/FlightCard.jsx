import React from "react";

const FlightCard = () => {
  return (
    <div className="flight-card">
      <div className="flight-card__header">
        <div className="flight-header--left">
          <h2>9N82B</h2>
          <span className="airlines-name">Buddha Air</span>
        </div>
        <div className="flight-header--right">
          <span
            className="status"
            style={{
              background: "#35D635",
              color: "white",
              padding: "0.2rem 0.5rem",
              borderRadius: "10px",
            }}
          >
            Completed
          </span>
        </div>
      </div>
      <div className="flight-card__body">
        <table className="flight-card__body--table">
          <tr>
            <td>
              <p className="table-heading">ORIGIN</p>
              <p>Pokhara</p>
            </td>
            <td>
              <p className="table-heading">STA</p>
              <p>13:45</p>
            </td>
            <td>
              <p className="table-heading">ETA</p>
              <p>13:49</p>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default FlightCard;
