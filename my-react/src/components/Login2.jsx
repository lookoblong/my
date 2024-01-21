import React from "react";
import Naver from "./Naver";
import Google from "./Google";
import Google2 from "./Google2";
import { Route, Routes } from "react-router-dom";
import SignUpKakao from "./SignUpKakao";
import styled from "styled-components";

const CenterLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Space = styled.div`
  margin-bottom: 17px;
`;

const SignupText = styled.div`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const Login2 = () => {
  return (
    <CenterLogin>
      <Space>
        <SignupText>간편 로그인으로 손쉽게 mogul에 로그인하세요.</SignupText>
      </Space>
      <Space>
        <Naver />
      </Space>
      <Space>
        <SignUpKakao />
      </Space>
      <Space>
        <Google2 />
      </Space>
    </CenterLogin>
  );
};

export default Login2;
