import { createStore, applyMiddleware } from "redux"
import reducers from "../reducers"
import thunk from "redux-thunk"
import Api from "../services/api"
const instance = new Api()

const store = createStore(
  reducers,
  applyMiddleware(thunk.withExtraArgument(instance))
)

export default store
