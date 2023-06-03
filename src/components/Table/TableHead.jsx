const TableHead = () => {
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

        <th id="destination">
          <tr className="header-col">DESTINATION /</tr>
          <tr className="header-col nepali">गन्तव्य</tr>
        </th>

        <th id="flight">
          <tr className="header-col">FLIGHT /</tr>
          <tr className="header-col nepali">उडान</tr>
        </th>
        <th id="gate">
          <tr className="header-col">GATE /</tr>
          <tr className="header-col nepali">गेट</tr>
        </th>
        <th id="status">
          <tr className="header-col">STATUS /</tr>
          <tr className="header-col nepali">स्थिति</tr>
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
