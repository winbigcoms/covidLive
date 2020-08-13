import Axios from "axios";

export default class CovidService{
  static async getCityData(){
    const cityKey = "zD%2B5S1HIVi5RfD%2FvZ0AKwZduqAYQAjJ%2B%2FlQnIsVCYmaRmd0F%2BtMEjmvtU3NrhxcSdkUuzkhPZynYNKyM3Ya6Aw%3D%3D";
    const data = await Axios.get(`/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=${cityKey}&startCreateDt=20200812&endCreateDt=20200812`);
    // 지역 데이터 총 17개, 17번이 총계
    const needData = data.data.response.body.items.item;
    needData.shift();
    return needData
  }
}