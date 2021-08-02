import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core'
import { useParams } from 'react-router';


export const Product = () => {
    const { id } = useParams();
    const [productinfo, setProductinfo] = useState({})
    const [loaded, setloaded] = useState(false)



    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                setProductinfo(res.data)
                setloaded(true)
            })
            .catch(err => console.log(err))
        console.log(productinfo)


    }, [])

    console.log(productinfo)

    const deleteproduct = (e) => {
        axios.delete("http://localhost:8000/api/products/delete/" + productinfo._id)
            .then(res => console.log("-I- " + res))
            .catch(err => console.log("-E- " + err))
    }

    return (loaded &&

        <div className="box"  >
            <p>{"Title:       " + productinfo.title}</p>
            <p>{"Price:       " + productinfo.price}</p>
            <p>{"Description: " + productinfo.description}</p>
            <Button variant="contained" color="primary" onClick={deleteproduct}>
                delete
            </Button>

        </div>

    );
};