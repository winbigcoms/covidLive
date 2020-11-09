import Axios from "axios";

export default class CovidService{
  static async getCityData(){
    const cityKey = "zD%2B5S1HIVi5RfD%2FvZ0AKwZduqAYQAjJ%2B%2FlQnIsVCYmaRmd0F%2BtMEjmvtU3NrhxcSdkUuzkhPZynYNKyM3Ya6Aw%3D%3D";
    const date = new Date();
    const getDataDate = date.getHours() > 9?
                    `${date.getFullYear()}${date.getMonth()+1 < 10 ? "0"+date.getMonth()+1:date.getMonth()+1}${date.getDate()<10?"0"+date.getDate():date.getDate()}`:
                    `${date.getFullYear()}${date.getMonth()+1 < 10 ? "0"+date.getMonth()+1:date.getMonth()+1}${date.getDate()<10?"0"+(date.getDate()-1):(date.getDate()-1)<10?`${"0"+(date.getDate()-1)}`:`${date.getDate()}`}`;

    const data = await Axios.get(`/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=${cityKey}&startCreateDt=${getDataDate}&endCreateDt=${getDataDate}`);
    // 지역 데이터 총 17개, 17번이 총계
    const needData = data.data.response.body.items.item;
    console.log(getDataDate);
    needData.shift();
    return needData
  }
}