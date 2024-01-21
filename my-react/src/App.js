import Layout from "./common/Layout";
import Home from "./components/Home";
import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import User from "./components/User";
import Board from "./components/Board";
import SignUpKakao from "./components/SignUpKakao";
import Naver from "./components/Naver";
import Login from "./components/Login";
import Login2 from "./components/Login2";
import Google from "./components/Google";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/users" element={<User />} />
          <Route path="/board" element={<Board />} />
          <Route path="/signUpKakao" element={<SignUpKakao />} />
          <Route path="/naver" element={<Naver />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login2" element={<Login2 />} />
          <Route path="/google" element={<Google />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
