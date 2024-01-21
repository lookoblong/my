import React from "react";
import Naver from "./Naver";
import Google from "./Google";
import { Route, Routes } from "react-router-dom";
import SignUpKakao from "./SignUpKakao";
import styled from "styled-components";

import LoginForm from "./LoginForm";

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

const Login = () => {
  return (
    <CenterLogin>
      <Space>
        <SignupText>1초 회원가입으로 손쉽게 mogul을 시작하세요.</SignupText>
      </Space>
      <Space>
        <Naver />
      </Space>
      <Space>
        <SignUpKakao />
      </Space>
      <Space>
        <Google />
      </Space>
      <Space>
        <LoginForm />
      </Space>
    </CenterLogin>
  );
};

export default Login;
