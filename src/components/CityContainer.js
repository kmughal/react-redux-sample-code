import { connect } from "react-redux";
import ListView from "./CityView";
import { INIT_LOAD, RELOAD_DATASET } from "../actions";
const mapStateToProps = ({ cityStore }, ownProps) => ({ ...cityStore });

const mapDispatchToAction = (dispatch) => {
  return {
    loadCityData: () => {
      dispatch({ type: INIT_LOAD });
    },
    refresh: () => {
      dispatch({ type: RELOAD_DATASET });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToAction)(ListView);
