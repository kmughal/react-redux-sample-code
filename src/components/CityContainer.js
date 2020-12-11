import { useDispatch, useSelector } from "react-redux"
import Api from "../services/api"
import { INIT_LOAD_COMPLETED, RELOAD_DATASET } from "../actions"
import CityView from "./CityView"

const instance = new Api()
export default () => {
  const { cityStore } = useSelector((state) => state)
  const dispatch = useDispatch()

  const loadCityData = async () => {
    const payload = await instance.getCities()
    dispatch({ type: INIT_LOAD_COMPLETED, payload })
  }

  const refresh = () => dispatch({ type: RELOAD_DATASET })

  return (
    <CityView
      isload={cityStore.isload}
      list={cityStore.list}
      fetching={cityStore.fetching}
      loadCityData={loadCityData}
      refresh={refresh}
    />
  )
}
