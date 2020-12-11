const INIT_LOAD = Symbol("INIT_LOAD")
const INIT_LOAD_COMPLETED = Symbol("INIT_LOAD_COMPLETED")
const RELOAD_DATASET = Symbol("RELOAD_DATASET")
export { INIT_LOAD, INIT_LOAD_COMPLETED, RELOAD_DATASET }

export const loadCityData = () => async (dispatch, getState, api) => {
  const payload = await api.getCities()
  dispatch({ type: INIT_LOAD_COMPLETED, payload })
}

export const refresh = () => (dispatch) => dispatch({ type: RELOAD_DATASET })
