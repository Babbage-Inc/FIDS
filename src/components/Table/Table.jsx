// import TableHead from "./TableHead";
// import TableBody from "./TableBody";

// const Table = ({ selectedOption }) => {
//   return (
//     <table>
//       <TableHead selectedOption={selectedOption} />
//       <TableBody selectedOption={selectedOption} />
//     </table>
//   );
// };

// export default Table;

import React, { useState, useEffect } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import FirstTimeDialogue from "./FirstTimeDialogue";

const Table = ({ selectedOption }) => {
  const [showFirstTimeDialogue, setShowFirstTimeDialogue] = useState(false);

  useEffect(() => {
    // Check if the dialogue has been shown before
    const firstTimeDialogueShown = localStorage.getItem(
      "firstTimeDialogueShown"
    );

    if (!firstTimeDialogueShown) {
      setShowFirstTimeDialogue(true);
    }
  }, []);

  const handleCloseFirstTimeDialogue = () => {
    // Set a flag in the browser storage indicating the dialogue has been shown
    localStorage.setItem("firstTimeDialogueShown", "true");
    setShowFirstTimeDialogue(false);
  };

  return (
    <div>
      {/* Render the dialogue conditionally */}
      {showFirstTimeDialogue && (
        <FirstTimeDialogue handleClose={handleCloseFirstTimeDialogue} />
      )}

      <table>
        <TableHead selectedOption={selectedOption} />
        <TableBody selectedOption={selectedOption} />
      </table>
    </div>
  );
};

export default Table;
