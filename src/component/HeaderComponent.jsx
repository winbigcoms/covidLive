// @flow
import React from 'react';
import "../styles/covidLive.svg";
import Logo from "../styles/covidLive.jpg";
import styles from "../styles/header.module.scss"
export function HeaderComponent({nickName}) {
  return (
    <header className={styles.header}>
      <span>
        <img src={Logo} alt=""/>
      </span>
      <ul className={styles.HeaderNavigation}>
        <li></li>
        <li>{nickName}님</li>
        <li><button>로그아웃</button></li>
      </ul>
    </header>
  );
};