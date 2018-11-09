import React from "react";
import Cart from "../containers/Cart";
import { Link } from "react-router-dom";

export const Menu = ({ totalPrice, numberOfItems }) => (
  <div className="menu">
    <div className="menu__title">Shopping card</div>
    <div className="menu__totalPrice">
      Итого: <b>{totalPrice} руб.</b>
    </div>
    <div className="menu__cart">
      <Link to="/cart">
        Корзина <span className="menu__cart--box">{numberOfItems} шт.</span>
      </Link>
    </div>
  </div>
);
