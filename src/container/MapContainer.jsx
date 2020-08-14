// @flow
import  React from 'react';
import MemoKorea2 from '../component/Korea2';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { startGetCovidData } from '../redux/modules/covid';
export function MapContainer({setSelect}) {

  const dispatch = useDispatch();
  const covidData = useSelector(state=> state.covidData.city);
  const total = useSelector(state=> state.covidData.total);
  const getCovidData = useCallback(()=>{
    dispatch(startGetCovidData());
  },[dispatch]);

  return (
    <MemoKorea2 
      width={600} 
      height={650} 
      covidData={covidData} 
      total={total}
      getCovidData={getCovidData} 
      setSelect={setSelect}
    />
  );
};