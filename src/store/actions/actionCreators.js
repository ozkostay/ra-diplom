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
} from "./actionTypes";

// export function listServicesRequest() {
// return { type: HITS_REQUEST, payload: {} }
// }
// export function listServicesSuccess(services) {
// return { type: HITS_SUCCESS, payload: {} }
// }
// export function itemServiseRequest(id) {
// return { type: HITS_ERROR, payload: {} }
// }
export function categoriesRequest(param) {
  return { type: CATEGORIES_REQUEST, payload: { param } };
}
export function categoriesSuccess(categories) {
  return { type: CATEGORIES_SUCCESS, payload: { categories } };
}
export function categoriesError() {
  return { type: CATEGORIES_ERROR, payload: {} };
}
export function changCurrentCategory(id) {
  return { type: CHANGE_CURRENT_CATEGORY, payload: id };
}
export function listProductsRequest(param) {
  return { type: LIST_CATALOG_REQUEST, payload: { param } };
}
export function listProductsSuccess(products) {
  return { type: LIST_CATALOG_SUCCESS, payload: { products } };
}
export function listProductsError() {
  return { type: LIST_CATALOG_ERROR, payload: {} };
}
