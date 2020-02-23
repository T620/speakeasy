export const filterProducts = filter => {
  return function(dispatch, getState) {
    var allProducts = getState().products.all;
    var filterOptions = getState().filter.options;

    if (filter === "All Products") {
      // show all products and set the selected option to this one
      // for the next render
      dispatch(dispatchFilterProducts(allProducts));
      dispatch(changeFilter(0));
    } else {
      var filteredProducts = [...allProducts].filter(product => {
        return product.category === filter;
      });

      var selectedFilter = [...filterOptions].filter(option => {
        return option.text === filter;
      });

      dispatch(changeFilter(selectedFilter.id));
      dispatch(dispatchFilterProducts(filteredProducts));
    }
  };
};

export const dispatchFilterProducts = products => {
  return {
    type: "UPDATE_FILTERED",
    payload: {
      products: products
    }
  };
};

export const changeFilter = newFilter => {
  return {
    type: "CHANGE_FILTER",
    payload: {
      newFilter: newFilter
    }
  };
};

export const changeSortDirection = newDirection => {
  return {
    type: "CHANGE_SORT_DIRECTION",
    payload: {
      newDirection: newDirection
    }
  };
};

export const selectTask = product => {
  return function(dispatch) {
    dispatch(dispatchSelectProduct(product));
  };
};

export const dispatchSelectProduct = product => {
  return {
    type: "UPDATE_SELECTED",
    payload: product
  };
};

export const toggleModal = toggleState => {
  return {
    type: "TOGGLE_MODAL",
    payload: toggleState
  };
};
