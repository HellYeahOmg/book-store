var initialState = {
  items: [],
  totalPrice: 0
};
// Мне подсказали, что хранить это в редюсере не лучшая идея, но я уже сделаль, поэтому в следующий раз
const addTotalPrice = (oldPrice, newPrice) => oldPrice + newPrice;
const reduceTotalPrice = (oldPrice, priceToDelete, quantity) =>
  oldPrice - priceToDelete * quantity;

const addToCart = (items, newProduct) => {
  // Пишу костыль, потому что лень разбираться с Array.reduce(). Суть - проверка на дубликаты, если есть, то не добавляем, а увеличиваем quantity
  var arr = items.slice();
  if (arr.length === 0) {
    arr.push(newProduct);
  } else {
    var shouldAdd = true;
    arr.forEach(item => {
      if (item.id === newProduct.id) {
        item.quantity++;
        shouldAdd = false;
        // совпадение в любом случае только одно
      }
    });
    if (shouldAdd) arr.push(newProduct); // если все-таки нет совпадений, то добавить в конец массива
  }
  return arr;
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: addToCart(state.items, action.payload),
        totalPrice: addTotalPrice(state.totalPrice, action.payload.price)
      };

    case "DELETE_FROM_CART":
      return {
        ...state,
        items: state.items.filter(book => book.id !== action.payload.id),
        totalPrice: reduceTotalPrice(
          state.totalPrice,
          action.payload.price,
          action.payload.quantity
        )
      };
    default:
      return state;
  }
};
