import {
  HITS_REQUEST,
  HITS_SUCCESS,
  HITS_ERROR,
  CATEGORIES_REQUEST,
  CATEGORIES_SUCCESS,
  CATEGORIES_ERROR,
  LIST_CATALOG_REQUEST,
  LIST_CATALOG_SUCCESS,
  LIST_CATALOG_ERROR
} from '../actions/actionTypes';

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case LIST_CATALOG_REQUEST:
      return {...state, loading: true, error: null};
    case LIST_CATALOG_SUCCESS:
      const {products} = action.payload;
      return {...state, products, loading: false, error: null};
    case LIST_CATALOG_ERROR:
      return {...state, loading: false, error: true};
    default:
      return state;
  }
}