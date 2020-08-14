import covidData from './covid';
import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router';
import authReducer from './auth'

const reducer = (history) => (
  combineReducers({
    authReducer,
    covidData,
    router:connectRouter(history)
  })
)


export default reducer