import { all } from "@redux-saga/core/effects";
import { deleteProductSaga, getProductSaga, postProductSaga, putProductSaga } from "./root/rootproductsaga";

export function* rootSaga() {
  yield all([getProductSaga(), postProductSaga(), deleteProductSaga(), putProductSaga()]);
}
