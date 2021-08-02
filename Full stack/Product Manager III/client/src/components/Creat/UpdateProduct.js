import React, { useState, useEffect } from 'react'
import { Button, TextField } from '@material-ui/core'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom';


function UpdateProduct() {
    const history = useHistory();
    const { id } = useParams()
    const [title, setTitle] = useState()
    const [price, setPrice] = useState()
    const [description, setDescription] = useState()
    const [submitErr, setSubmitErr] = useState("")
    const titleHandler = e => setTitle(e.target.value);
    const priceHandler = e => setPrice(e.target.value);
    const descriptionHandler = e => setDescription(e.target.value);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)

            })
            .catch(err => console.log(err))



    }, [])


    const submitErrMesgs = {
        noSubmit: "Please fix the errors above before submitting the form"
    };

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/update/' + id, {
            title,
            price,
            description
        })
    }
    const deleteProduct = (e) => {
        axios.delete("http://localhost:8000/api/products/delete/" + id)
            .then(res => console.log("-I- " + res))
            .catch(err => console.log("-E- " + err))
        history.push('/');
    }

    return (
        <>
            <form className="newPrpForm" onSubmit={submitHandler} >
                <TextField id="standard-basic" label={title} onChange={titleHandler} />
                <TextField id="standard-basic" label={price} type="number" onChange={priceHandler} />
                <TextField id="standard-basic" label={description} onChange={descriptionHandler} />
                <Button variant="contained" color="primary" type="submit">
                    Update
                </Button>
                <Button variant="contained" color="primary" onClick={deleteProduct}>
                    delete
                </Button>
            </form>

        </>
    )
}

export default UpdateProduct
