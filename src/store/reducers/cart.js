import {
  CART_REQUEST,
  CART_SUCCESS,
  CART_ERROR,
  ADD_CART_REQUEST,
  ADD_CART_SUCCESS,
  ADD_CART_ERROR,
  DELETE_CART_REQUEST,
  DELETE_CART_SUCCESS,
  DELETE_CART_ERROR,
} from "../actions/actionTypes";

const initialState = {
  cart: [],
};

export default function cartReducer(state = initialState, action) {
  // console.log("CART reduser ", action.type);
  switch (action.type) {
    case ADD_CART_REQUEST:
      return { ...state, loading: true, error: null };
    case ADD_CART_SUCCESS:
      // console.log("REDUSER ADD CART", action.payload);
      const cart = action.payload;
      return { ...state, cart, loading: false, error: null };
    case ADD_CART_ERROR:
      return { ...state, loading: false, error: true };
    default:
      // console.log("CART reduser DEFAULT", state);
      return state;
  }
}

// order = {
//   Product: product,
//   size: activeSize[0].size,
//   quantity: quantity,
//   price: product.price
// }
