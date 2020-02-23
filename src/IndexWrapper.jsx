import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers/index.js";
import Index from "./components/Index";

export default class IndexWrapper extends Component {
  configureStore(initialState) {
    return applyMiddleware(thunk)(createStore)(
      rootReducer,
      initialState,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  }

  render() {
    const store = this.configureStore(this.props);
    return (
      <Provider store={store}>
        <Index {...this.props} />
      </Provider>
    );
  }
}
