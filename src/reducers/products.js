var initialState = {
  items: [],
  isReady: false
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_PRODUCTS":
      return {
        ...state,
        items: action.payload,
        isReady: true
      };
    // т.к. просто так нельзя получать данные из разных редюсеров, то я решил просто обрабатывать actions из filter здесь
    case "ALL":
      return {
        ...state,
        items: [...state.items].sort((a, b) => {
          return a.id - b.id;
        })
      };
    case "PRICE_HIGH":
      return {
        ...state,
        items: [...state.items].sort((a, b) => {
          return b.price - a.price;
        })
      };
    case "PRICE_LOW":
      return {
        ...state,
        items: [...state.items].sort((a, b) => {
          return a.price - b.price;
        })
      };
    case "AUTHOR":
      return {
        ...state,
        items: [...state.items].sort((a, b) => {
          return a.author.localeCompare(b.author);
        })
      };
    default:
      return state;
  }
};
