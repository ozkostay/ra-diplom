import {
  HITS_REQUEST,
  HITS_SUCCESS,
  HITS_ERROR,
  CATEGORIES_REQUEST,
  CATEGORIES_SUCCESS,
  CATEGORIES_ERROR,
  LIST_CATALOG_REQUEST,
  LIST_CATALOG_SUCCESS,
  LIST_CATALOG_ERROR,
  SET_OFFSET,
  SET_FINDSTRING,
} from "../actions/actionTypes";

const initialState = {
  products: [],
  loading: false,
  error: null,
  offset: 0,
  findString: '',
};

export default function productsReducer(state = initialState, action) {
  console.log('reduser ',action.type);
  switch (action.type) {
    case LIST_CATALOG_REQUEST:
      return { ...state, loading: true, error: null };
    case LIST_CATALOG_SUCCESS:
      const { products } = action.payload;
      return { ...state, products, loading: false, error: null };
    case LIST_CATALOG_ERROR:
      return { ...state, loading: false, error: true };
    case SET_OFFSET:
      return { ...state, offset: action.payload };
    case SET_FINDSTRING:
      console.log(222, action.payload);
      return { ...state, findString: action.payload };
    default:
      console.log('reduser-DEF');
      return state;
  }
}
