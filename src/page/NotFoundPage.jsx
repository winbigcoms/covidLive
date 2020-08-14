// @flow
import React from 'react';
import styles from "../styles/notFound.module.scss"
import { Link } from 'react-router-dom';
export function NotFoundPage() {
  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.notFoundMessage}>
        <h1>잘못된 요청입니다!</h1>
        <p>올바른 주소를 입력해주세요</p>
        <Link to="/">돌아가기</Link>
      </div>
    </div>
  );
};