import { Menu } from "../components/Menu";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const mapStateToProps = state => {
  const countItems = () => {
    // подсчет всех книг в корзине, считает по полю quantity у каждой книги
    var count = 0;
    state.cart.items.forEach(item => {
      count += item.quantity;
    });
    return count;
  };
  return {
    totalPrice: state.cart.totalPrice,
    numberOfItems: countItems()
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
