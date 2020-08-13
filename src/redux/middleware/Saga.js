import { all } from "redux-saga/effects";
import { covidSaga } from "../modules/covid";

export default function* rootSaga(){
  yield all([
    covidSaga()
  ])
}