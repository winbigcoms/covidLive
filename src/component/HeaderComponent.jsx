// @flow
import React from "react";
import "../styles/covidLive.svg";
import Logo from "../styles/covidLive.jpg";
import styles from "../styles/header.module.scss";
import { Link } from "react-router-dom";
export function HeaderComponent({ nickName, logout }) {
  return (
    <header className={styles.header}>
      <span>
        <img src={Logo} alt="" />
      </span>
      <ul className={styles.HeaderNavigation}>
        <li>
          <Link>차트보기</Link>
        </li>
        <li>{nickName}님</li>
        <li>
          <button onClick={click}>로그아웃</button>
        </li>
      </ul>
    </header>
  );

  function click() {
    logout();
  }
}
