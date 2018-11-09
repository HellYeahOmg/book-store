import { Products } from "../components/Products";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToCart } from "../actions/products";

const mapStateToProps = state => {
  return {
    products: state.products.items,
    isReady: state.products.isReady
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addToCart }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
