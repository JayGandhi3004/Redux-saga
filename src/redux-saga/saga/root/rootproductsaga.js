import { takeLatest } from "redux-saga/effects";
import { DELETE_PRODUCT_PROGRESS, GET_PRODUCT_PROGRESS, POST_PRODUCT_PROGRESS, PUT_PRODUCT_PROGRESS } from "../../product/action/action";
import { handleDeleteProduct, handleGetProduct, handlePostProduct, handlePutProduct } from "../manageproduct/manageproduct";

// GET product data
export function* getProductSaga() {
  yield takeLatest(GET_PRODUCT_PROGRESS, handleGetProduct);
}

// post product data
export function* postProductSaga() {
  yield takeLatest(POST_PRODUCT_PROGRESS, handlePostProduct);
}

// delete product data
export function* deleteProductSaga() {
  yield takeLatest(DELETE_PRODUCT_PROGRESS, handleDeleteProduct);
}

// update product data
export function* putProductSaga() {
  yield takeLatest(PUT_PRODUCT_PROGRESS, handlePutProduct);
}