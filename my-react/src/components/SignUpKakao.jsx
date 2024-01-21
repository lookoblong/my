import React from "react";
import kakaoImage from "./img/kakao.png";

const SignUpKakao = () => {
  const client_id = process.env.REACT_APP_KAKAO_CLIENT_ID;
  const redirect_uri = process.env.REACT_APP_KAKAO_REDIRECT_URI;

  //이건 로그인창인데
  const url = `https://kauth.kakao.com/oauth/authorize?scope=account_email&client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code&prompt=login`;

  //이건 왜 바로 싸피..?
  // const url = `  https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}`;

  const ClickToKakao = () => {
    window.location.replace(`${url}`);
  };

  return (
    // <a href={url}>
    <img src={kakaoImage} alt="kakao" onClick={ClickToKakao} />
    // </a>
  );
};

export default SignUpKakao;
