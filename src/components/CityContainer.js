import { connect } from "react-redux"
import ListView from "./CityView"
import { loadCityData, refresh } from "../actions"

const mapStateToProps = ({ cityStore }, ownProps) => ({ ...cityStore })

const mapDispatchToAction = {
  loadCityData,
  refresh,
}

export default connect(mapStateToProps, mapDispatchToAction)(ListView)
