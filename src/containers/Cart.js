import { Cart } from "../components/Cart";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteFromCart } from "../actions/cart";

const mapStateToProps = state => {
  return {
    books: state.cart.items
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ deleteFromCart }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
