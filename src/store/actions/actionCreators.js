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
  SET_OFFSET,
  SET_FINDSTRING,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_ERROR,
} from "./actionTypes";

export function hitsRequest(param) {
  return { type: HITS_REQUEST, payload: { param } };
}
export function hitsSuccess(hits) {
  return { type: HITS_SUCCESS, payload: { hits } };
}
export function hitsError() {
  return { type: HITS_ERROR, payload: {} };
}
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
export function setOffset(num) {
  return { type: SET_OFFSET, payload: num };
}
export function setFindString(findString) {
  return { type: SET_FINDSTRING, payload: findString };
}
export function productRequest(param) {
  console.log('action REQUEST param', param);
  return { type: PRODUCT_REQUEST, payload: { param } };
}
export function productSuccess(product) {
  console.log('action SUCCESS param', product);
  return { type: PRODUCT_SUCCESS, payload: { product } };
}
export function productError() {
  console.log('action ERROR param');
  return { type: PRODUCT_ERROR, payload: {} };
}
