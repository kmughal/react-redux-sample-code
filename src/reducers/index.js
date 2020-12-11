import { combineReducers } from "redux"
import {
  INIT_LOAD,
  INIT_LOAD_COMPLETED,
  RELOAD_DATASET,
} from "../actions"
const defaultState = { isload: false, list: null }

function cityStore(state = defaultState, action) {
  switch (action.type) {
    case INIT_LOAD:
    case RELOAD_DATASET:
      return { fetching: true, isload: false, list: null }
    case INIT_LOAD_COMPLETED:
      return { fetching: false, list: action.payload, isload: true }
    default:
      return { ...state }
  }
}

const reducers = combineReducers({ cityStore })

export default reducers
