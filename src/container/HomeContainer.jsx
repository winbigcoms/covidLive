// @flow
import React from 'react';
import { MapContainer } from './MapContainer';
import { TableContainer } from './TableContainer';
import styles from "../styles/Home.module.scss"
export function HomeContainer(props) {
  return (
    <div className={styles.HomeContainer}>
      <MapContainer/>
      <TableContainer/>
    </div>
  );
};