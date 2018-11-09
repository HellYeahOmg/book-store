export const filterByAll = () => {
  return {
    type: "ALL"
  };
};

export const filterByHighPrice = () => {
  return {
    type: "PRICE_HIGH"
  };
};
export const filterByLowPrice = () => {
  return {
    type: "PRICE_LOW"
  };
};
export const filterByAuthor = () => {
  return {
    type: "AUTHOR"
  };
};

export const searchBy = key => {
  return {
    type: "SEARCH",
    payload: key
  };
};
