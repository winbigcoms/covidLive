import  React, { useEffect } from 'react';
import MemoKorea2 from '../component/Korea2';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { startGetCovidData } from '../redux/modules/covid';
export function MapContainer({setSelect,select}) {

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
      getCovidData={getCovidData} 
      setSelect={setSelect}
      select={select}
    />
  );
};