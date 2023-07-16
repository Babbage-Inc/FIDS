import React, { useState, useEffect } from "react";
import MobileTableIndex from "./MobileTableIndex";

import loadingMobile from "./assets/mobile-loading.png";
import loadingTab from "./assets/tablet-loading.png";

import "../../styles/Mobile.css";

// function IntroImage() {
//   return <img className="intro-image" src={loadingTab} alt="Intro" />;
// }

function IntroImage() {
  return (
    <picture id="loading-img-container">
      <source
        className="intro-image"
        media="(max-width: 500px)"
        srcSet={loadingMobile}
      />
      <img className="intro-image" src={loadingTab} alt="Loading screen" />
    </picture>
  );
}

function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return <div>{isLoading ? <IntroImage /> : <MobileTableIndex />}</div>;
}

export default LoadingScreen;
