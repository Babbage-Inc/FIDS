import React from "react";

import logoHeader from "./assets/logo-header.png";

const Navbar = () => {
  return (
    <>
      <nav>
        <img className="mb-logo-header" src={logoHeader} alt="Logo" />
      </nav>
    </>
  );
};

export default Navbar;
