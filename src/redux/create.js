import {createStore, applyMiddleware}from 'redux'
import {createBrowserHistory} from "history";
import {composeWithDevTools} from "redux-devtools-extension"
import createSagaMiddleware from "redux-saga";
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import rootSaga from "./middleware/Saga"
import reducer from "./modules/reducer"

export let history = createBrowserHistory();

const SagaMiddleware = createSagaMiddleware();

const Store = () => {
  const str = createStore(
    reducer(history),
    {},
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