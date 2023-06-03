import React from "react";
import Table from "./components/Table/Table";
import { FaPlaneDeparture } from "react-icons/fa";

const App = () => {
  let time = new Date();
  let currTime = time.toLocaleTimeString();

  // Define options for date format
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  let currDate = time.toLocaleDateString(undefined, options);

  return (
    <div className="departures">
      <header>
        <div className="header-right">
          <FaPlaneDeparture className="custom-icon" /> DEPARTURES / प्रस्थान
        </div>
        <div className="header-left">
          <div className="header-left_top">{currTime}</div>
          <div className="header-bottom">{currDate}</div>
        </div>
      </header>
      <Table />

      <marquee loop="1" scrollamount="20">
        कृपया कुनै पनि प्रकारको गरगहना, बहुमुल्य baggage मा नराख्नु होला ।
        Please do not put any kind of jewellery, valuables in the baggage. It is
        Not Allowed.
      </marquee>
    </div>
  );
};

export default App;
