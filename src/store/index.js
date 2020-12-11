import { createStore, applyMiddleware } from "redux"
import reducers from "../reducers"
import Api from "../services/api"

const store = createStore(
  reducers
)

export default store
