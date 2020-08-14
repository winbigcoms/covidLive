// @flow
import React from "react";
import { MapContainer } from "./MapContainer";
import { TableContainer } from "./TableContainer";
import styles from "../styles/Home.module.scss";
import { useState } from "react";
import { ChartComponent } from "../component/ChartComponent";

export function HomeContainer() {
  const [select, setSelect] = useState("Total");
  return (
    <div className={styles.HomeContainer}>
      <MapContainer select={select} setSelect={setSelect} />
      <TableContainer select={select} />
    </div>
  );
}
