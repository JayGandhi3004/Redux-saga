import axios from "axios";
import { BASE_URL, DELETE_PRODUCT_API, GET_PRODUCT_API, POST_PRODUCT_API, PUT_PRODUCT_API,  } from "../../constant";

// get
export const getProduct = () => {
    return axios.get(BASE_URL + GET_PRODUCT_API).then((res) => {
        // console.log(res);

        const data = res.data;
        const status = res.status

        return {
            data,
            status,
        }
    })
        .catch((err) => console.log(err));
};

// post 
export const postProduct = (action) => {
    console.log(action, "action");
    return axios.post(BASE_URL + POST_PRODUCT_API, action.payload).then((res) => {

        console.log(res);
        const data = res.data;
        console.log(data);
        const status = res.status

        return {
            data,
            status,
        }
    })
        .catch((err) => console.log(err));
};

// delete 
export const deleteProduct = (action) => {
    console.log(action, "action");
    return axios.delete(BASE_URL + DELETE_PRODUCT_API + action.payload).then((res) => {

        const data = action.payload;
        const status = res.status

        return {
            data,
            status,
        }
    })
        .catch((err) => console.log(err));
};

// update 
export const updateProduct = (action) => {
    console.log(action, "api action");
    const id=action.payload.id;
    return axios.put(`${BASE_URL}${PUT_PRODUCT_API}${id}`,action.payload).then((res) => {

        const data = action.payload;
        const status = res.status

        return {
            data,
            status,
        }
    })
        .catch((err) => console.log(err));
};