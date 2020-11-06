import React, { useRef, useEffect } from "react";
import Chart from "chart.js";
import styles from "../styles/chart.module.scss";
import { Link } from "react-router-dom";
export function ChartComponent({ cityData, getCovidData }) {
  const canvas = useRef(null);
  const color = [
    "pink",
    "skyblue",
    "red",
    "blue",
    "green",
    "yellow",
    "brown",
    "purple",
    "orange",
    "aqua",
    "beige",
    "gray",
    "navy",
    "#db84ff",
    "#29ffbd",
    "black",
    "orchid",
  ];
  useEffect(() => {
    const myChart = new Chart(canvas.current.getContext("2d"), {
      type: "bar",
      data: {
        labels: [
          "제주",
          "경남",
          "경북",
          "전남",
          "전북",
          "충남",
          "충북",
          "강원",
          "경기",
          "세종",
          "울산",
          "대전",
          "광주",
          "인천",
          "대구",
          "부산",
          "서울",
        ],
        datasets: [
          {
            label: "지역별 코로나 감염수",
            data: cityData.map((city) => city.defCnt),
            backgroundColor: color,
          },
        ],
      },
    });
  }, [cityData, color]);
  return (
    <div className={styles.chartContainer}>
      <canvas ref={canvas} className={styles.canvas}></canvas>
      <Link to="/">홈으로</Link>
    </div>
  );
}
