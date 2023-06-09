const TableHead = ({ selectedOption }) => {
  return (
    <thead>
      <tr>
        <th id="time">
          <tr className="header-col">TIME /</tr>
          <tr className="header-col nepali">समय</tr>
        </th>

        <th id="airline">
          <tr className="header-col">AIRLINES /</tr>
          <tr className="header-col nepali">वायुसेवा</tr>
        </th>

        {selectedOption === "intl-dept" || selectedOption === "dom-dept" ? (
          <th id="destination">
            <tr className="header-col">DESTINATION /</tr>
            <tr className="header-col nepali">गन्तव्य</tr>
          </th>
        ) : (
          <th id="destination">
            <tr className="header-col">ORIGIN /</tr>
            <tr className="header-col nepali">आगमान</tr>
          </th>
        )}

        <th id="flight">
          <tr className="header-col">FLIGHT /</tr>
          <tr className="header-col nepali">उडान</tr>
        </th>

        {selectedOption === "intl-arr" ||
        selectedOption === "dom-arr" ? null : (
          <th id="gate">
            <tr className="header-col">GATE /</tr>
            <tr className="header-col nepali">गेट</tr>
          </th>
        )}

        <th id="status">
          <tr className="header-col">STATUS /</tr>
          <tr className="header-col nepali">स्थिति</tr>
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
