import React, { useState } from 'react'
import axios from 'axios'
import Form from './Form';


function CreatProduct() {





    const Handler = (product) => {

        axios.post('http://localhost:8000/api/products/new/', product)
            .then(res => {

            })
            .catch(err => {

            })


    }

    return (
        <>
            <Form Handler={Handler} value="create" data={{ title: "Title", price: "Price", description: "Description" }} />

        </>
    )
}

export default CreatProduct
