import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ChartComponent } from "../component/ChartComponent";
import { startGetCovidData } from "../redux/modules/covid";

export function ChartContainer() {
  const cityData = useSelector((state) => state.covidData.city);
  console.log(cityData.map((city) => city.defCnt));

  const dispatch = useDispatch();
  const getCovidData = useCallback(() => {
    dispatch(startGetCovidData());
  }, [dispatch]);

  return <ChartComponent cityData={cityData} getCovidData={getCovidData} />;
}
