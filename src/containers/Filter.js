import { Filter } from "../components/Filter";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  filterByAll,
  filterByHighPrice,
  filterByLowPrice,
  filterByAuthor,
  searchBy
} from "../actions/filter";

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    // actions вызываются в filter, но обрабатывает их reducer из products
    {
      filterByAll,
      filterByHighPrice,
      filterByLowPrice,
      filterByAuthor,
      searchBy
    },
    dispatch
  );
};

export default connect(
  null,
  mapDispatchToProps
)(Filter);
