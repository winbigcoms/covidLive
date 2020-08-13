import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import MemoKoreaMap from './KoreaMap';

function App() {
  const [countryData,setCountryData] = useState([]);
  const [useData,setUseData] = useState([]);
  
  async function getData() {
    const key="zD%2B5S1HIVi5RfD%2FvZ0AKwZduqAYQAjJ%2B%2FlQnIsVCYmaRmd0F%2BtMEjmvtU3NrhxcSdkUuzkhPZynYNKyM3Ya6Aw%3D%3D"
    try{
      const data = await Axios.get(`/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=${key}&startCreateDt=20200812`);
      const needData = data.data.response.body.items.item;
      let total = needData[18];
      needData.shift();
      needData.pop();
      const useDatas = needData.map((data)=>{
        return ({
          gubun:data.gubunEn,
          defCnt:data.defCnt,
          percent : parseFloat(data.defCnt/total.defCnt*100).toFixed(2)
        })
      })
      setUseData(useDatas);
      setCountryData(needData);
    }catch(e){
      console.error(e);
    }
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="App">
      <MemoKoreaMap width={700} height={1000} useData={useData}/>
    </div>
  );
}

export default App;
