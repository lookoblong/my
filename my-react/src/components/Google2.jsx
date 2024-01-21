import { useEffect } from "react";
import React from "react";

function Google2() {
  function handleCallbackResponse(res) {
    console.log("Encoded JWT ID token: " + res.credential);
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("G_OAuth_btn"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <div className="App">
      <div id="G_OAuth_btn"></div>
    </div>
  );
}
export default Google2;
