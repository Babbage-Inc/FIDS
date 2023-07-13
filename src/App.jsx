import React from "react";
import { useMediaQuery } from "react-responsive";

import WebTableIndex from "./components/Web/WebTableIndex";
import LoadingScreen from "./components/Mobile/LoadingScreen";

const App = () => {
  const isWeb = useMediaQuery({ query: "(min-width: 830px)" });

  return (
    <div>
      {!isWeb && (
        /* Mobile and Tablet-specific content */
        <>
          <LoadingScreen />
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
