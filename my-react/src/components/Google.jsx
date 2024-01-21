import { GoogleLogin } from "@react-oauth/google";
import { useGoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import googleImage from "./img/google.png";

const Google = () => {
  const client_id = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  // const redirect_uri = process.env.REACT_APP_GOOGLE_REDIRECT_URI;

  // const url = `https://accounts.google.com/o/oauth2/auth?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code&scope=openid email profile`;

  // const ClickToGoogle = () => {
  //   window.location.replace(`${url}`);
  // };
  // return (
  //   <img
  //     src={googleImage}
  //     alt="google"
  //     onClick={ClickToGoogle}
  //     style={{ width: "183px", height: "45px" }}
  //   />
  // );
  return (
    <GoogleOAuthProvider clientId={`${client_id}`}>
      <GoogleLogin
        onSuccess={(res) => {
          console.log(res);
        }}
        onFailure={(err) => {
          console.log(err);
        }}
      />
    </GoogleOAuthProvider>
  );
};

export default Google;
