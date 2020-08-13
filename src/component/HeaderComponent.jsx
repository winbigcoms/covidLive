// @flow
import React from 'react';
import "../styles/covidLive.svg";
import styles from "../styles/header.module.scss"
export function HeaderComponent({nickName}) {
  return (
    <header className={styles.header}>
      <span><img src="../styles/covidLive.svg" alt=""/></span>
      <ul className={styles.HeaderNavigation}>
        <li></li>
        <li></li>
        <li>{nickName}님</li>
      </ul>
    </header>
  );
};