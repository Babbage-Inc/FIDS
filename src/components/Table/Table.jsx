import TableHead from "./TableHead";
import TableBody from "./TableBody";

const Table = ({ selectedOption }) => {
  return (
    <table>
      <TableHead selectedOption={selectedOption} />
      <TableBody selectedOption={selectedOption} />
    </table>
  );
};

export default Table;
