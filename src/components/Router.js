import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "../containers/Cart";
import App from "../App";

export const Router = props => (
  <BrowserRouter basename="/book-store">
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/cart" component={Cart} />
    </Switch>
  </BrowserRouter>
);
