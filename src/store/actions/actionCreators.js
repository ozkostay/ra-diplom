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
} from './actions/actionTypes';

// export function listServicesRequest() {
// return { type: HITS_REQUEST, payload: {} }
// }
// export function listServicesSuccess(services) {
// return { type: HITS_SUCCESS, payload: {} }
// }
// export function itemServiseRequest(id) {
// return { type: HITS_ERROR, payload: {} }
// }
// export function listServicesRequest() {
// return { type: CATEGORIES_REQUEST, payload: {} }
// }
// export function listServicesSuccess(services) {
// return { type: CATEGORIES_SUCCESS, payload: {} }
// }
// export function itemServiseRequest(id) {
// return { type: CATEGORIES_ERROR, payload: {} }
// }
export function listProductsRequest() {
return { type: LIST_CATALOG_REQUEST, payload: {} }
}
export function listProductsSuccess(products) {
return { type: LIST_CATALOG_SUCCESS, payload: {products} }
}
export function listProductsError(id) {
return { type: LIST_CATALOG_ERROR, payload: {} }
}
