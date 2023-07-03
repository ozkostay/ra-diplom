import { takeLatest, put, spawn, debounce, retry } from "redux-saga/effects";

import {
  listProductsRequest,
  listProductsSuccess,
  listProductsError,
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
} from "../actions/actionTypes";

import { searchProducts } from "../api/searchProducts";

// import { searchItem } from '../api/searchItem';

// import { act } from 'react-dom/test-utils';

// function filterChangeSearchAction({ type, payload}) {
//   return type === CHANGE_SEARCH_FIELD && payload.search.trim() !== '';
// }

// // worker
// function* handleChangeSearchSaga(action) {
//   yield put(searchSkillsRequest(action.payload.search));
// }

// worker
function* handleSearchProductsSaga(action) {
  try {
    const retryCount = 1;
    const retryDelay = 1 * 1000;
    const data = yield retry(
      retryCount,
      retryDelay,
      searchProducts,
      action.payload.aaa
    );
    yield put(listProductsSuccess(data));
  } catch (e) {
    yield put(listProductsError(e.massage));
  }
}

// function* handleSearchItemSaga(action) {
//   // console.log('777', action);
//   try {
//     const retryCount = 1;
//     const retryDelay = 1 * 1000;
//     const data = yield retry(
//       retryCount,
//       retryDelay,
//       searchItem,
//       action.payload.id
//     )
//     yield put(itemServiseSuccess(data));
//   } catch (e) {
//     yield put(listProductsError(e.massage));
//   }
// }

// // watcher
// function* watchChangeSearchSaga() {
//   yield debounce(100, filterChangeSearchAction, handleChangeSearchSaga);
// }

// watcher
function* watchListProductsSaga() {
  yield takeLatest(LIST_CATALOG_REQUEST, handleSearchProductsSaga);
}

// function* watchItemServiceSaga() {
//   yield takeLatest(ITEM_SERVICE_REQUEST, handleSearchItemSaga);
// }

export default function* saga() {
  yield spawn(watchListProductsSaga);
  // yield spawn(watchItemServiceSaga);
}
