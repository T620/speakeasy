// import {
//   UPDATE_SERVICES,
//   FILTER_SERVICES
// } from "../../constants/user_service_package_constants";

import products from "../products.json";

const initialState = {
  all: products,
  filtered: [],
  selected: {},
  newTask: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_PRODUCTS":
      const updatedProducts = [...action.payload.products];

      return {
        ...state,
        all: updatedProducts
      };

    case "UPDATE_SELECTED":
      const selected = action.payload;
      return {
        ...state,
        selected: selected
      };

    case "UPDATE_FILTERED":
      const filteredProducts = action.payload.products;
      return {
        ...state,
        filtered: filteredProducts
      };

    default:
      return state;
  }
}
