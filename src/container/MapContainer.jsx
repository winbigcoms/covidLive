// @flow
import  React from 'react';
import MemoKorea2 from '../component/Korea2';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { startGetCovidData } from '../redux/modules/covid';
export function MapContainer() {
  // async function getData() {
  //   try{
  //     let total = needData[18];
  //     needData.pop();
  //     const useDatas = needData.map((data)=>{
  //       return ({
          // gubun:data.gubunEn,
          // defCnt:data.defCnt,
          // percent : parseFloat(data.defCnt/total.defCnt*100).toFixed(2)
  //       })
  //     })
  //     setUseData(useDatas);
  //   }catch(e){
  //     console.error(e);
  //   }
  // }
  // useEffect(()=>{
  //   getData()
  // },[])
  const dispatch = useDispatch();
  const covidData = useSelector(state=> state.covidData.city);
  const total = useSelector(state=> state.covidData.total);
  const getCovidData = useCallback(()=>{
    dispatch(startGetCovidData());
  },[dispatch]);


  return (
    <MemoKorea2 
      width={600} 
      height={800} 
      covidData={covidData} 
      total={total}
      getCovidData={getCovidData} 
    />
  );
};