import React from 'react';
import styles from "../styles/dataTable.module.scss";
export function TableComponent({total,cityData,select}) {
  return (
    select === total.gubunEn ? (
      <table className={styles.table}>
        <thead>
          <tr>
            <th colSpan="3">{total.stdDay.slice(0,14)}{total.gubun === "합계"? "전국 현황":""}</th>
         </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>확진자수 </p>
              <p>{total.defCnt}명</p>
            </td>
            <td>
              <p>전일 대비 증가수</p> 
              <p>{total.incDec}명</p>  
            </td>
            <td>
              <p>격리중 확진자</p>
              <p>{total.isolIngCnt}명</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>격리 해제 확진자</p>
              <p>{total.isolClearCnt}명</p>
            </td>
            <td>
              <p>해외유입확진</p>
              <p>{total.overFlowCnt}명</p>
            </td>
            <td>
              <p>지역확진</p>
              <p>{total.localOccCnt}명</p>
            </td>
          </tr>
        </tbody>    
      </table>
    ):(
      cityData.filter(city => city.gubunEn === select).map((selectCity,idx) => (
      <table className={styles.table} key={idx}>
        <thead>
          <tr>
            <th colSpan="3">{total.stdDay.slice(0,14)}{selectCity.gubun} 현황</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>확진자수 </p>
              <p>{selectCity.defCnt}명</p>
            </td>
            <td>
              <p>전일 대비 증가수</p> 
              <p>{selectCity.incDec}명</p>  
            </td>
            <td>
              <p>격리중 확진자</p>
              <p>{selectCity.isolIngCnt}명</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>격리 해제 확진자</p>
              <p>{selectCity.isolClearCnt}명</p>
            </td>
            <td>
              <p>해외유입확진</p>
              <p>{selectCity.overFlowCnt}명</p>
            </td>
            <td>
              <p>지역확진</p>
              <p>{selectCity.localOccCnt}명</p>
            </td>
          </tr>
        </tbody>    
      </table>))
    )
  );
};