export function loadProducts(data) {
  return {
    type: "LOAD_PRODUCTS",
    payload: data
  };
}

export function addToCart({ id, title, author, image, price }) {
  let item = {
    image,
    title,
    author,
    id,
    price,
    quantity: 1
  };

  return {
    type: "ADD_TO_CART",
    payload: item
  };
}
