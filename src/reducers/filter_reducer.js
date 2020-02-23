// import {
//   UPDATE_SERVICES,
//   FILTER_SERVICES
// } from "../../constants/user_service_package_constants";

import categories from "../categories.js";

const initialState = {
  options: categories(),
  selected: 0,
  sortDirection: "asc"
};

/* Notes on this reducer/state:
  selected is an index to all[], defaults to 'show all products'
  Sort will order the names of the seleted products. I could've used a seperate reducer for sorting, but for sake of time, it's going in the filter reducer.
*/

export default function(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_FILTER":
      const newFilter = action.payload.newFilter;
      return {
        ...state,
        selected: newFilter
      };

    case "CHANGE_SORT_DIRECTION":
      const newDirection = action.payload.newDirection;
      return {
        ...state,
        sortDirection: newDirection
      };

    default:
      return state;
  }
}
