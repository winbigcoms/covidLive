// @flow
import React from 'react';
import styles from "../styles/dataTable.module.scss";
export function TableComponent({total,cityData}) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th colSpan="3">{total.gubun === "합계"? "전국현황":""}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <p>확진자수 </p>
            <span>{total.defCnt}</span>
          </td>
          <td>
            <p>전일 대비 증가수</p> 
            <span>{total.incDec}</span>  
          </td>
          <td>
            <p>격리중 확진자</p>
            <span>{total.isolIngCnt}</span>
          </td>
        </tr>
        <tr>
          <td>
            <p>격리 해제 확진자</p>
            <span>{total.isolClearCnt}</span>
          </td>
          <td>
            <p>해외유입확진</p>
            <span>{total.overFlowCnt}</span>
          </td>
          <td>
            <p>지역확진</p>
            <span>{total.localOccCnt}</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};