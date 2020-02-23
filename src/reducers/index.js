import { combineReducers } from "redux";
import productReducer from "./product_reducer";
import filterReducer from "./filter_reducer";
import modalReducer from "./modal_reducer";
// import { reducer as notifReducer } from "redux-notifications";

const rootReducer = combineReducers({
  products: productReducer,
  filter: filterReducer,
  modal: modalReducer
});

export default rootReducer;
