import React from 'react';
import { TableComponent } from '../component/TableComponent';
import { useSelector } from 'react-redux';
export function TableContainer({select}) {
  const total = useSelector(state=>state.covidData.total)
  const cityData = useSelector(state=>state.covidData.allData)
  return (
    <TableComponent  select={select} total={total} cityData={cityData}/>
  );
};