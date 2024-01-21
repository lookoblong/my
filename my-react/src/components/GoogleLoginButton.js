import styled from "styled-components";
import { useGoogleLogin } from "@react-oauth/google";

function GoogleLoginButton() {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  return <button onClick={() => login()}>Google로 로그인</button>;
}

export default GoogleLoginButton;
