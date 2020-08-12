import React, { useState, useEffect } from 'react';
import './styles/koreaMap/css/korea.css';
import Axios from 'axios';


function App() {
  const [countryData,setCountryData] = useState([]);
  
  async function getData() {
    const key="zD%2B5S1HIVi5RfD%2FvZ0AKwZduqAYQAjJ%2B%2FlQnIsVCYmaRmd0F%2BtMEjmvtU3NrhxcSdkUuzkhPZynYNKyM3Ya6Aw%3D%3D"
    try{
      const data = await Axios.get(`http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=${key}`);
      console.log(data.data);
      // const needData = data.data.response.body.items.item;
      // setCountryData(needData);
    }catch(e){
      console.error(e);
    }
  }
  useEffect(()=>{
    getData()
  },[])

  return (
    <div className="App">
      <ul className="korea-map-font-v1">
        <li className="강원">a</li>
        <li className="경기">b</li>
        <li className="경남">c</li>
        <li className="경북">d</li>
        <li className="광주">e</li>
        <li className="대구">f</li>
        <li className="대전">g</li>
        <li className="부산">h</li>
        <li className="서울">i</li>
        <li className="세종">j</li>
        <li className="울산">k</li>
        <li className="인천">l</li>
        <li className="전남">m</li>
        <li className="전북">n</li>
        <li className="제주">o</li>
        <li className="충남">p</li>
        <li className="충북">q</li>
      </ul>
    </div>
  );
}

export default App;
