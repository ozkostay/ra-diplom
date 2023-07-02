import { takeLatest, put, spawn, debounce, retry } from 'redux-saga/effects';
import {
  listServicesSuccess,
  itemServiseSuccess,
  errorServicesRequest,
  errorItemRequest,
} from '../actions/actionCreators';
import {
  LIST_SERVICES_REQUEST,
  LIST_SERVICES_SUCCESS,
  ITEM_SERVICE_REQUEST,
  ITEM_SERVICE_SUCCESS,
  ERROR_LIST_REQUEST,
  ERROR_ITEM_REQUEST
 } from '../actions/actionTypes'
import { searchServices } from '../api/searchServices';
import { searchItem } from '../api/searchItem';
import { act } from 'react-dom/test-utils';

// function filterChangeSearchAction({ type, payload}) {
//   return type === CHANGE_SEARCH_FIELD && payload.search.trim() !== '';
// }

// // worker
// function* handleChangeSearchSaga(action) {
//   yield put(searchSkillsRequest(action.payload.search));
// }

// worker
function* handleSearchServicesSaga(action) {
  try {
    const retryCount = 1;
    const retryDelay = 1 * 1000;
    const data = yield retry(
      retryCount,
      retryDelay,
      searchServices,
      action.payload.search
    )
    yield put(listServicesSuccess(data));
  } catch (e) {
    yield put(errorServicesRequest(e.massage));
  }
}
  
function* handleSearchItemSaga(action) {
  // console.log('777', action);
  try {
    const retryCount = 1;
    const retryDelay = 1 * 1000;
    const data = yield retry(
      retryCount,
      retryDelay,
      searchItem,
      action.payload.id
    )
    yield put(itemServiseSuccess(data));
  } catch (e) {
    yield put(errorItemRequest(e.massage));
  }
}

// // watcher
// function* watchChangeSearchSaga() {
//   yield debounce(100, filterChangeSearchAction, handleChangeSearchSaga);
// }

// watcher
function* watchListServicesSaga() {
  yield takeLatest(LIST_SERVICES_REQUEST, handleSearchServicesSaga);
}

function* watchItemServiceSaga() {
  yield takeLatest(ITEM_SERVICE_REQUEST, handleSearchItemSaga);
}

export default function* saga() {
  yield spawn(watchListServicesSaga);
  yield spawn(watchItemServiceSaga);
}
