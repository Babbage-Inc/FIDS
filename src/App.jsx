import React from "react";
import { useMediaQuery } from "react-responsive";

import WebTableIndex from "./components/Web/WebTableIndex";
import MobileTableIndex from "./components/Mobile/MobileTableIndex";

const App = () => {
  const isWeb = useMediaQuery({ query: "(min-width: 820px)" });

  return (
    <div>
      {!isWeb && (
        /* Mobile and Tablet-specific content */
        <>
          <MobileTableIndex />
        </>
      )}
      {isWeb && (
        /* Web-specific content */
        <>
          <WebTableIndex />
        </>
      )}
    </div>
  );
};

export default App;
