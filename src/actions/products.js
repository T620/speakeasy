export const updateProducts = products => {
  return {
    type: "UPDATE_PRODUCTS",
    payload: {
      products: products
    }
  };
};

export const create = product => {
  return function(dispatch, getState) {
    var products = [...getState().products.all];

    products.push(product);

    dispatch(updateProducts(products));
  };
};

export const toggleModal = () => {
  // no need to pass param since the reducer flips the current state
  return {
    type: "TOGGLE_MODAL"
  };
};

export const deleteProduct = productName => {
  return function(dispatch, getState) {
    var products = getState().products.all;

    // using string text matching in a filter to delete something definitely isn't the best way to do this. Ideally you'd have an id field but I didn't want to mutate your JSON file.
    var updatedProducts = products.filter(product => {
      return product.name !== productName;
    });

    dispatch(updateProducts(updatedProducts));
  };
};
