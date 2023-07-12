import React, { useState, useEffect } from "react";
import Table from "./Table";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";

const TableIndex = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [currTime, setCurrTime] = useState("");
  const [currDate, setCurrDate] = useState("");

  useEffect(() => {
    const updateTimeAndDate = () => {
      const time = new Date();
      setCurrTime(time.toLocaleTimeString());
      setCurrDate(
        time.toLocaleDateString(undefined, {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      );
    };

    // Update time and date every second
    const interval = setInterval(() => {
      updateTimeAndDate();
    }, 1000);

    // Cleanup interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  let headerText = "";
  let iconComponent = null;

  if (selectedOption === "intl-arr") {
    headerText = "INT'L ARRIVAL / अन्तराष्ट्रिय आगमन";
    iconComponent = <FaPlaneArrival className="custom-icon" />;
  } else if (selectedOption === "dom-arr") {
    headerText = "DOM ARRIVAL / अन्तरिक आगमन";
    iconComponent = <FaPlaneArrival className="custom-icon" />;
  } else if (selectedOption === "intl-dept") {
    headerText = "INT'L DEPARTURE / अन्तराष्ट्रिय प्रस्थान";
    iconComponent = <FaPlaneDeparture className="custom-icon" />;
  } else if (selectedOption === "dom-dept") {
    headerText = "DOM DEPARTURE / अन्तराष्ट्रिय प्रस्थान";
    iconComponent = <FaPlaneDeparture className="custom-icon" />;
  }

  return (
    <div className="departures">
      <header>
        <div className="header-option">
          <input
            type="radio"
            name="option"
            id="intl-arr-1"
            value="intl-arr"
            onChange={handleOptionChange}
          />
          <label htmlFor="intl-arr-1">Int'l Arr</label>
          <input
            type="radio"
            name="option"
            id="dom-arr"
            value="dom-arr"
            onChange={handleOptionChange}
          />
          <label htmlFor="dom-arr">Dom Arr</label>
          <input
            type="radio"
            name="option"
            id="intl-dept"
            value="intl-dept"
            onChange={handleOptionChange}
          />
          <label htmlFor="intl-dept">Int'l Dept</label>
          <input
            type="radio"
            name="option"
            id="dom-dept"
            value="dom-dept"
            onChange={handleOptionChange}
          />
          <label htmlFor="dom-dept">Dom Dept</label>
        </div>

        <div className="header-main">
          <div className="header-left">
            {iconComponent} {headerText}
          </div>
          <div className="header-right">
            <div className="header-left_top">{currTime}</div>
            <div className="header-bottom">{currDate}</div>
          </div>
        </div>
      </header>

      <Table selectedOption={selectedOption} />

      {selectedOption === "intl-dept" || selectedOption === "dom-dept" ? (
        <marquee loop="1" scrollamount="12">
          कृपया कुनै पनि प्रकारको गरगहना तथा बहुमुल्य वस्तुहरु baggage मा
          नराख्नु होला । Please do not put any kind of jewellery, valuables in
          the baggage. It is Not Allowed.
        </marquee>
      ) : (
        <marquee loop="1" scrollamount="12">
          सूचना: यात्रा कागजातहरू, सामानहरू सङ्कलन गर्नुहोस्, बहुमूल्य वस्तुहरू
          राख्नुहोस्, ग्राहक सेवामा कुनै पनि समस्याहरू रिपोर्ट गर्नुहोस्।
          Notice: Travel documents, collect luggage, keep valuables, report any
          issues to customer service.
        </marquee>
      )}
    </div>
  );
};

export default TableIndex;
