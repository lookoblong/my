import styled from "styled-components";
import GoogleLoginButton from "./GoogleLoginButton";
import { GoogleOAuthProvider } from "@react-oauth/google";

function LoginForm() {
  const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  return (
    <GoogleOAuthProvider clientId={`${CLIENT_ID}`}>
      <GoogleLoginButton />
    </GoogleOAuthProvider>
  );
}

export default LoginForm;
