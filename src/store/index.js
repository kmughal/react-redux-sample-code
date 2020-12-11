import { createStore, applyMiddleware } from "redux"
import reducers from "../reducers"
import createSagaMiddleware from 'redux-saga'
import Api from "../services/api"
const instance = new Api()

import {startSaga} from "../sagas";

const sageMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(sageMiddleware)
)

sageMiddleware.run(startSaga)

export default store
