import { call, put } from "redux-saga/effects";
import { deleteProduct, getProduct, postProduct, updateProduct } from "../../product/api/api";
import { DELETE_PRODUCT_ERROR, DELETE_PRODUCT_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS, POST_PRODUCT_ERROR, POST_PRODUCT_SUCCESS, PUT_PRODUCT_ERROR, PUT_PRODUCT_SUCCESS } from "../../product/action/action";

// GET 
export function* handleGetProduct(action) {
    try {
        const res = yield call(getProduct, action);
        // console.log(res,"this is get status");
        const status = res.status;
        const data = res.data;
        if (status === 200) {
            yield put({ type: GET_PRODUCT_SUCCESS, data });
        } else {
            yield put({ type: GET_PRODUCT_ERROR, data });
        }
    } catch (e) {
        yield put({ type: GET_PRODUCT_ERROR, e });
    }
}

// post
export function* handlePostProduct(action) {
    try {
        const res = yield call(postProduct, action);
        const status = res.status;
        console.log(res," this is post status");
        const data = res.data;
        if (status === 201) {
            yield put({ type: POST_PRODUCT_SUCCESS, data });
        } else {
            yield put({ type: POST_PRODUCT_ERROR, data });
        }
    } catch (e) {
        yield put({ type: POST_PRODUCT_ERROR, e });
    }
}

// delete
export function* handleDeleteProduct(action) {
    try {
        const res = yield call(deleteProduct, action);
        const status = res.status;
        console.log(res," this is post status");
        const data = res.data;
        if (status === 200) {
            yield put({ type: DELETE_PRODUCT_SUCCESS, data });
        } else {
            yield put({ type: DELETE_PRODUCT_ERROR, data });
        }
    } catch (e) {
        yield put({ type: DELETE_PRODUCT_ERROR, e });
    }
}

// update
export function* handlePutProduct(action) {
    try {
        const res = yield call(updateProduct, action);
        const status = res.status;
        console.log(action," this is post status");
        const data = res.data;
        if (status === 200 || status === 201) {
            yield put({ type: PUT_PRODUCT_SUCCESS, data });
        } else {
            yield put({ type: PUT_PRODUCT_ERROR, data });
        }
    } catch (e) {
        yield put({ type: PUT_PRODUCT_ERROR, e });
    }
}