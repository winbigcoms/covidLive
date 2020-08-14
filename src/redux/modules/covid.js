import {put,select,call,takeLatest} from "redux-saga/effects";
import { createActions, handleActions } from "redux-actions"
import CovidService from "../../services/CovidService";
import { push } from "connected-react-router";
// 초기 값
const initState = {
  city: [],
  total: {},
  loading:false,
  error:null,
}
// 액션 생성자
// export function createWidget(books,bok) {
//   return { 
//        type: SUCCESS, books, bok 
//   };
// }
const {start, success, fail} = createActions(
  {
    SUCCESS: (covidData,total) => ({covidData, total})
  },
  `START`,
  `FAIL`,{
    prefix: 'covidData'
  }
)
// 리듀서
const covidData = handleActions({
    START:(state)=>({
      city: state.city,
      total: state.total,
      loading:true,
      error:null,
    }),
    SUCCESS:(state,action)=>({
      city: action.payload.covidData,
      total: action.payload.total,
      loading:false,
      error:null,
    }),
    FAIL:(state,action)=>({
      city: [],
      total: {},
      loading:false,
      error:action.payload.error,
    }),
  },
  initState,
  {
    prefix:`covidData`
  }
)
export default covidData;

// 사가 액션
const START_GET_COVID = `START_GET_COVID`;

// 액션 생성자
export const startGetCovidData = ()=>({
  type:START_GET_COVID
})

// 사가 함수
function* startGetCovidDataSage(){
  try{
    yield put(start());
    const token =  yield select((state)=>state.authReducer.token);
    if(token===null) {
      yield put(push("/signin"));
      const error = "비로그인"
      yield put(fail(error));
      return
    }
    console.log("ss")
    const covidData = yield call(CovidService.getCityData);
    const total = covidData.pop();
    console.log(covidData, total)
    yield put(success(covidData,total));
  }catch(error){
    console.log("1")
    yield put(fail(error));
  }
}

export function* covidSaga(){
  yield takeLatest(START_GET_COVID,startGetCovidDataSage)
}