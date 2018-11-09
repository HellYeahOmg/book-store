import React from "react";
import { Link } from "react-router-dom";

export const Cart = props => {
  return (
    <div className="cart">
      <Link to="/">Назад</Link>
      {props.books.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <>
          {props.books.map((book, index) => {
            const { title, image, quantity } = book;
            return (
              <div key={index} className="cart__item">
                <div className="cart__img">
                  <img src={image} alt={title} />
                </div>
                <div className="cart__book-title">
                  {title} {quantity} шт.
                </div>
                <button
                  className="cart__delete"
                  onClick={() => props.deleteFromCart(book)}
                >
                  Удалить
                </button>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};
