import React from "react";

export const ProductItem = book => {
  var { image, title, author, price, onAdd, quantity } = book;
  return (
    <div className="product__item">
      <div className="product__image">
        <img src={image} alt={title} />
      </div>
      <div className="product__content">
        <div className="product__title">{title}</div>
        <div className="product__author">{author}</div>
        <div className="product__price">{price} рублей</div>
      </div>
      <button className="product__btn" onClick={() => onAdd(book)}>
        Добавить в корзину {quantity}
      </button>
    </div>
  );
};
