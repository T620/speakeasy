const initialState = {
  isOpen: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_MODAL":
      var originalState = state.isOpen;

      return {
        ...state,
        isOpen: !originalState
      };

    default:
      return state;
  }
}
