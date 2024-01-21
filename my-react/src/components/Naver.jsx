import React from "react";
import NaverImage from "./img/naver.png";

const Naver = () => {
  const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
  const NAVER_REDIRECT_URI = process.env.REACT_APP_NAVER_REDIRECT_URI;
  const STATE = "False";

  const naver_url = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=STATE_STRING&redirect_uri=${NAVER_REDIRECT_URI}`;

  const NaverLogin = () => {
    window.location.href = naver_url;
  };

  return (
    <img
      src={NaverImage}
      alt="naver"
      onClick={NaverLogin}
      style={{ width: "183px", height: "45px" }}
    />
  );
};

export default Naver;
