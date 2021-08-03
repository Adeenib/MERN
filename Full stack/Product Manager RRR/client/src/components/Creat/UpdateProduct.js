import React, { useState, useEffect } from 'react'
import { Button, TextField } from '@material-ui/core'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import Form from './Form';
import ComButton from './ComButton';


const UpdateProduct = (props) => {
    const history = useHistory();
    const { id } = useParams()
    const [product, setProduct] = useState({ title: "", price: 0, description: "" })

    const [Loaded, setLoaded] = useState(false)
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                setProduct({
                    title: res.data.title,
                    price: res.data.price,
                    description: res.data.description
                })
                setLoaded(true)

            })
            .catch(err => console.log(err))



    }, [])




    const submitHandler = (data) => {

        axios.put('http://localhost:8000/api/products/update/' + id, {
            title: data.title,
            price: data.price,
            description: data.description
        })
    }
    const deleteProduct = (e) => {
        axios.delete("http://localhost:8000/api/products/delete/" + id)
            .then(res => console.log("-I- " + res))
            .catch(err => console.log("-E- " + err))
        history.push('/');
    }

    return (
        <div>
            {Loaded &&
                <>

                    <Form data={product} value="Update" Handler={submitHandler} />
                    <ComButton value="Delete" className='deleteOnUpdate' ButtonHandler={deleteProduct} />

                </>
            }
        </div>
    )
}

export default UpdateProduct
