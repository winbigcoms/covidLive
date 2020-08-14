import covidData from './covid';
import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router';

const reducer = (history) => (
  combineReducers({
    covidData,
    router:connectRouter(history)
  })
)


export default reducer