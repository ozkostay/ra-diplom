import {
  HITS_REQUEST,
  HITS_SUCCESS,
  HITS_ERROR,
  CATEGORIES_REQUEST,
  CATEGORIES_SUCCESS,
  CATEGORIES_ERROR,
  CHANGE_CURRENT_CATEGORY,
  LIST_CATALOG_REQUEST,
  LIST_CATALOG_SUCCESS,
  LIST_CATALOG_ERROR,
} from "../actions/actionTypes";

const initialState = {
  categories: [],
  loading: false,
  error: null,
  currentСategory: 0,
};

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORIES_REQUEST:
      return { ...state, loading: true, error: null };
    case CATEGORIES_SUCCESS:
      let { categories } = action.payload;
      categories = [{ id: 0, title: "Все" }, ...categories];
      return { ...state, categories, loading: false, error: null };
    case CATEGORIES_ERROR:
      return { ...state, loading: false, error: true };
    case CHANGE_CURRENT_CATEGORY:
      return { ...state, currentСategory: action.payload };
    default:
      return state;
  }
}
