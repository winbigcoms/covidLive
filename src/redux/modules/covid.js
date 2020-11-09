import { put, select, call, takeLatest } from "redux-saga/effects";
import { createActions, handleActions } from "redux-actions";
import CovidService from "../../services/CovidService";
import { push } from "connected-react-router";
// 초기 값
const initState = {
  city: [],
  allData:[],
  total: {},
  loading: false,
  error: null,
};
// 액션 생성자
const { start, success, fail } = createActions(
  {
    SUCCESS: (covidData,allData, total) => ({ covidData,allData, total }),
  },
  `START`,
  `FAIL`,
  {
    prefix: "covidData",
  }
);
// 리듀서
const covidData = handleActions(
  {
    START: (state) => ({
      city: state.city,
      allData:state.allData,
      total: state.total,
      loading: true,
      error: null,
    }),
    SUCCESS: (state, action) => ({
      city: action.payload.covidData,
      allData:action.payload.allData,
      total: action.payload.total,
      loading: false,
      error: null,
    }),
    FAIL: (state, action) => ({
      city: [],
      allData:[],
      total: {},
      loading: false,
      error: action.payload.error,
    }),
  },
  initState,
  {
    prefix: `covidData`,
  }
);
export default covidData;

// 사가 액션
const START_GET_COVID = `START_GET_COVID`;

// 액션 생성자
export const startGetCovidData = () => ({
  type: START_GET_COVID,
});

// 사가 함수
function* startGetCovidDataSage() {
  try {
    yield put(start());
    const token = yield select((state) => state.authReducer.token);
    if (token === null) {
      yield put(push("/signin"));
      const error = "비로그인";
      yield put(fail(error));
      return;
    }
    const covidData = yield call(CovidService.getCityData);
    const total = covidData.pop();

    const setData = covidData.map(data =>({
      gubun:data.gubunEn,
      defCnt:data.defCnt,
      percent : parseFloat(data.defCnt/total.defCnt*100).toFixed(2)
    }));

    yield put(success(setData,covidData, total));
  } catch (error) {
    yield put(fail(error));
  }
}

export function* covidSaga() {
  yield takeLatest(START_GET_COVID, startGetCovidDataSage);
}
