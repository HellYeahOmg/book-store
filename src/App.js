import React, { Component } from "react";
import "./App.css";
import Menu from "./containers/Menu";
import Products from "./containers/Products";
import { loadProducts } from "./actions/products";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Filter from "./containers/Filter";

class App extends Component {
  componentDidMount() {
    fetch(`${process.env.PUBLIC_URL}/books.json`)
      .then(response => response.json())
      .then(response => this.props.loadProducts(response));
  }
  render() {
    return (
      <>
        <Menu />
        <div className="content">
          <Products />
          <Filter />
        </div>
      </>
    );
  }
}

const mapDispatcheToProps = dispatch => {
  return bindActionCreators({ loadProducts }, dispatch);
};

export default connect(
  null,
  mapDispatcheToProps
)(App);
