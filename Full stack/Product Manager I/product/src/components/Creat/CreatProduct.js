import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import axios from 'axios'


function CreatProduct() {
    const [title, setTitle] = useState()
    const [price, setPrice] = useState()
    const [description, setDescription] = useState()
    const [submitErr, setSubmitErr] = useState("")
    const titleHandler = e => setTitle(e.target.value);
    const priceHandler = e => setPrice(e.target.value);
    const descriptionHandler = e => setDescription(e.target.value);


    const submitErrMesgs = {
        noSubmit: "Please fix the errors above before submitting the form"
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const newProducts = { title: title, price: price, description: description };
        axios.post('http://localhost:8000/api/products/new/', newProducts)
            .then(res => {
                setTitle("");
                setPrice("");
                setDescription("");
            })
            .catch(err => {

            })


    }

    return (
        <>
            <form className="newPrpForm" onSubmit={submitHandler} >
                <TextField id="standard-basic" label="Title" onChange={titleHandler} />
                <TextField id="standard-basic" label="Price" type="number" onChange={priceHandler} />
                <TextField id="standard-basic" label="Description" onChange={descriptionHandler} />
                <Button variant="contained" color="primary" type="submit">
                    Create
                </Button>
            </form>

        </>
    )
}

export default CreatProduct
