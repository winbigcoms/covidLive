// @flow
import React from 'react';
import { TableComponent } from '../component/TableComponent';
import { useSelector } from 'react-redux';
export function TableContainer() {
  // const dispatch = useDispatch();
  const total = useSelector(state=>state.covidData.total)
  const cityData = useSelector(state=>state.covidData.city)
  return (
    <TableComponent total={total} cityData={cityData}/>
  );
};