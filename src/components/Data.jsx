import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_PRODUCT_PROGRESS, GET_PRODUCT_PROGRESS, POST_PRODUCT_PROGRESS, PUT_PRODUCT_PROGRESS } from '../redux-saga/product/action/action';

const Data = () => {

    const dispatch = useDispatch();
    const [newdata, setnewdata] = useState({})
    const [edit, setedit] = useState({})

    const data = useSelector((state) => state.productReducer);
    // console.log(data.product);

    const submit = () => {
        console.log(newdata);
        dispatch({ type: POST_PRODUCT_PROGRESS, payload: newdata })
        setnewdata({
            title: "",
            author: ""
        })
    }

    const handle = (e) => {
        setnewdata({ ...newdata, [e.target.name]: e.target.value })
    }

    const deletedata = (id) => {
        console.log(id);
        dispatch({ type: DELETE_PRODUCT_PROGRESS, payload: id })

    }

    const update = (e) => {
        setedit({ ...edit, [e.target.name]: e.target.value })
    }
    const editdata = (value) => {
        setedit(value)
    }
    // console.log(edit);

    const updatedata = () => {
        console.log(edit);
        dispatch({ type: PUT_PRODUCT_PROGRESS, payload: edit })

    }

    useEffect(() => {
        dispatch({ type: GET_PRODUCT_PROGRESS })
    }, []);

    return (
        <div>
            <div>
                <h3>ADD</h3>
                <input type="text" name='title' onChange={handle} value={newdata.title} />
                <input type="text" name='author' onChange={handle} value={newdata.author} />
                <button onClick={submit}> Submit</button>

                <h3>EDIT</h3>
                <input type="text" name='title' onChange={update} value={edit.title} />
                <input type="text" name='author' onChange={update} value={edit.author} />
                <button onClick={updatedata}> edit</button>


                {
                    data.product.map((val, index) => (
                        <div key={index}>
                            <h1>{val.id}</h1>
                            <h1>{val.title}</h1>
                            <h1>{val.author}</h1>
                            <button onClick={() => deletedata(val.id)}>Delete</button>
                            <button onClick={() => editdata(val)}>Edit</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Data
