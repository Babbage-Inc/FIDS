import React, { useState, useEffect } from "react";

const FirstTimeDialogue = () => {
  const [dialogueShown, setDialogueShown] = useState(false);

  useEffect(() => {
    const isDialogueShown = localStorage.getItem("firstTimeDialogueShown");
    if (isDialogueShown) {
      setDialogueShown(true);
    }
  }, []);

  const handleClose = () => {
    const isDialogueShown = localStorage.getItem("firstTimeDialogueShown");
    if (!isDialogueShown) {
      localStorage.setItem("firstTimeDialogueShown", "true");
      setDialogueShown(true);
    }
  };

  return (
    <div id="dialougeBox">
      {!dialogueShown && (
        <>
          <h1>WELCOME TO FIDS</h1>
          <p>
            To cast the site, install this extension in Google Chrome, then
            click the three dots at the top-right corner of Chrome and choose
            "Cast" to cast the screen.
            <a
              style={{
                color: "gold",
                textDecoration: "underline",
                marginLeft: "0.5rem",
              }}
              href="https://chrome.google.com/webstore/detail/jngkenaoceimiimeokpdbmejeonaaami"
            >
              Install Extension
            </a>
          </p>
        </>
      )}

      {!dialogueShown && (
        <button
          className="closeButton"
          onClick={handleClose}
          style={{ color: "black", padding: "0.6rem", margin: "0.6rem" }}
        >
          Close
        </button>
      )}
    </div>
  );
};

export default FirstTimeDialogue;
