export function deleteFromCart(book) {
  return {
    type: "DELETE_FROM_CART",
    payload: book
  };
}
