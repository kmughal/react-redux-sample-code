import { takeLatest, put, call } from "redux-saga/effects";
import Api from "../services/api";
import { INIT_LOAD, INIT_LOAD_COMPLETED } from "../actions";
const instance = new Api();

function* loadCityData() {
  const response = yield call(fetch, "https://api.teleport.org/api/cities");
  const result = yield response.json();
  const payload = result._embedded["city:search-results"];
  yield put({ type: INIT_LOAD_COMPLETED, payload });
}

export function* startSaga() {
  yield takeLatest(INIT_LOAD, loadCityData);
}
