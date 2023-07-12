import { takeLatest, put, spawn, debounce, retry } from "redux-saga/effects";

import {
  listProductsSuccess,
  listProductsError,
  categoriesSuccess,
  categoriesError,
  hitsSuccess,
  hitsError,
  productSuccess,
  productError,
} from "../actions/actionCreators";

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
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_ERROR,
} from "../actions/actionTypes";

import { searchProducts } from "../api/searchProducts";
import { searchCategories } from "../api/searchCategories";
import { searchHits } from "../api/searchHits";

// import { searchItem } from '../api/searchItem';

// import { act } from 'react-dom/test-utils';

// function filterChangeSearchAction({ type, payload}) {
//   return type === CHANGE_SEARCH_FIELD && payload.search.trim() !== '';
// }

// // worker
// function* handleChangeSearchSaga(action) {
//   yield put(searchSkillsRequest(action.payload.search));
// }

// worker;
function* handleSearchProductsSaga(action) {
  //console.log("=======", action.type);
  try {
    const retryCount = 1;
    const retryDelay = 1 * 1000;
    const data = yield retry(
      retryCount,
      retryDelay,
      searchProducts,
      action.payload.param
    );
    yield put(listProductsSuccess(data));
  } catch (e) {
    yield put(listProductsError(e.massage));
  }
}

function* handleSearchCategoriesSaga(action) {
  try {
    const retryCount = 1;
    const retryDelay = 1 * 1000;
    const data = yield retry(
      retryCount,
      retryDelay,
      searchCategories,
      action.payload.param
    );
    yield put(categoriesSuccess(data));
  } catch (e) {
    yield put(categoriesError(e.massage));
  }
}

function* handleSearchHitsSaga(action) {
  try {
    const retryCount = 1;
    const retryDelay = 1 * 1000;
    const data = yield retry(
      retryCount,
      retryDelay,
      searchHits,
      action.payload.param
    );
    yield put(hitsSuccess(data));
  } catch (e) {
    yield put(hitsError(e.massage));
  }
}

function* handleSearchProductSaga(action) {
  try {
    const retryCount = 1;
    const retryDelay = 1 * 1000;
    const data = yield retry(
      retryCount,
      retryDelay,
      searchProducts,
      action.payload.param
    );
    yield put(productSuccess(data));
  } catch (e) {
    yield put(productError(e.massage));
  }
}

// // watcher
// function* watchChangeSearchSaga() {
//   yield debounce(100, filterChangeSearchAction, handleChangeSearchSaga);
// }

// watcher
function* watchListProductsSaga() {
  yield takeLatest(LIST_CATALOG_REQUEST, handleSearchProductsSaga);
}

function* watchCategoriesSaga() {
  yield takeLatest(CATEGORIES_REQUEST, handleSearchCategoriesSaga);
}

function* watchHitsSaga() {
  yield takeLatest(HITS_REQUEST, handleSearchHitsSaga);
}

function* watchProductSaga() {
  yield takeLatest(PRODUCT_REQUEST, handleSearchProductSaga);
}

export default function* saga() {
  yield spawn(watchListProductsSaga);
  yield spawn(watchCategoriesSaga);
  yield spawn(watchHitsSaga);
  yield spawn(watchProductSaga);
}
