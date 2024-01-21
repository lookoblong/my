import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <div>
        <div className="logo">mogul</div>
      </div>
      <nav className="nav-container">
        <ul className="menu-list">
          <li className="menu-item">웹툰</li>
          <li className="menu-item">
            <Link to="board">게시판</Link>
          </li>
          <li className="menu-item">서재</li>
        </ul>
      </nav>
      <div className="search-menu-container">
        <input type="text" className="search-input" />
      </div>
      <ul className="additional-menu">
        <li className="menu-item">
          <Link to="users">회원리스트</Link>
        </li>
        <li className="menu-item">로그인</li>
        <li className="menu-item">
          <Link to="signUpKakao">회원가입</Link>
        </li>
        <li className="menu-item">프사</li>
      </ul>
    </header>
  );
};

export default Header;
