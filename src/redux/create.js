import {createStore, applyMiddleware}from 'redux'
import {createBrowserHistory} from "history";
import {composeWithDevTools} from "redux-devtools-extension"
import createSagaMiddleware from "redux-saga";
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import rootSaga from "./middleware/Saga"
import reducer from "./modules/reducer"
import TokenService from '../services/TokenService'


export let history = createBrowserHistory();

const token = TokenService.tokenGet();
const nickName = TokenService.nickNameGet()
console.log(nickName)

const SagaMiddleware = createSagaMiddleware();

const Store = () => {
  const str = createStore(
    reducer(history),
    {
      authReducer: {
        token: token,
        loading: false,
        error: null,
        nickname: nickName,
      }
    },
    composeWithDevTools(
      applyMiddleware(
        thunk,
        routerMiddleware(history),
        SagaMiddleware
      )
    )
  )
  SagaMiddleware.run(rootSaga);
  return str
}

export default Store;