import { DELETE_PRODUCT_ERROR, DELETE_PRODUCT_PROGRESS, DELETE_PRODUCT_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_PROGRESS, GET_PRODUCT_SUCCESS, POST_PRODUCT_ERROR, POST_PRODUCT_PROGRESS, POST_PRODUCT_SUCCESS, PUT_PRODUCT_ERROR, PUT_PRODUCT_PROGRESS, PUT_PRODUCT_SUCCESS, } from "../action/action"


const initialState = {
    product: [],

    //get reducer
    getProductprogress: false,
    getProducterror: null,

    //post reducer
    postProductprogress: false,
    postProducterror: null,

    //delete reducer
    deleteProductprogress: false,
    deleteProducterror: null,

    //update reducer
    updateProductprogress: false,
    updateProducterror: null,

    dataIsLoaded: false,
}

const productReducer = (state = initialState, action) => {

    switch (action.type) {
        //get
        case GET_PRODUCT_PROGRESS: {
            return {
                ...state,
                getProductprogress: true,
                getProducterror: null,
                dataIsLoaded: false,
            }
        }

        case GET_PRODUCT_SUCCESS: {
            return {
                ...state,
                getProductprogress: false,
                getProducterror: null,
                product: action.data,
                dataIsLoaded: true,
            }
        }

        case GET_PRODUCT_ERROR: {
            return {
                ...state,
                getProductprogress: false,
                getProducterror: action.data,
                dataIsLoaded: false,
            }
        }

        //post
        case POST_PRODUCT_PROGRESS: {
            return {
                ...state,
                postProductprogress: true,
                postProducterror: null,
                dataIsLoaded: false,
            }
        }

        case POST_PRODUCT_SUCCESS: {
            return {
                ...state,
                postProductprogress: false,
                postProducterror: null,
                product: state.product.concat(action.data),
                dataIsLoaded: true,
            }
        }

        case POST_PRODUCT_ERROR: {
            return {
                ...state,
                postProductprogress: false,
                postProducterror: action.data,
                dataIsLoaded: false,
            }
        }

        //delete
        case DELETE_PRODUCT_PROGRESS: {
            return {
                ...state,
                deleteProductprogress: true,
                deleteProducterror: null,
                dataIsLoaded: false,
            }
        }

        case DELETE_PRODUCT_SUCCESS: {
            return {
                ...state,
                deleteProductprogress: false,
                deleteProducterror: null,
                product: state.product.filter((e) => e.id !== action.data),
                dataIsLoaded: true,
            }
        }

        case DELETE_PRODUCT_ERROR: {
            return {
                ...state,
                deleteProductprogress: false,
                deleteProducterror: action.data,
                dataIsLoaded: false,
            }
        }

        //update
        case PUT_PRODUCT_PROGRESS: {
            return {
                ...state,
                updateProductprogress: true,
                updateProducterror: null,
                dataIsLoaded: false,
            }
        }

        case PUT_PRODUCT_SUCCESS: {
            return {
                ...state,
                updateProductprogress: false,
                updateProducterror: null,
                product: state.product.map((item) => {
                    if (item.id === action.data.id) {
                        return { ...item, ...action.data }
                    } else {
                        return item
                    }
                }),
                dataIsLoaded: true,
            }
        }

        case PUT_PRODUCT_ERROR: {
            return {
                ...state,
                updateProductprogress: false,
                updateProducterror: action.data,
                dataIsLoaded: false,
            }
        }

        default: {
            return {
                ...state,
            };
        }
    }
};

export default productReducer
