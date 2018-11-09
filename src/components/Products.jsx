import React from "react";
import { ProductItem } from "./ProductItem";

export const Products = props => (
  <div className="products">
    {props.isReady
      ? props.products.map(item => {
          return (
            <ProductItem {...item} key={item.id} onAdd={props.addToCart} />
          );
        })
      : "Загрузка..."}
  </div>
);
