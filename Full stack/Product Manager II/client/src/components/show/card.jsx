import axios from 'axios';
import React from 'react';
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom';



export const Card = ({ className, productinfo }) => {


    const deleteproduct = (e) => {
        axios.delete("http://localhost:8000/api/products/delete/" + productinfo._id)
            .then(res => console.log("-I- " + res))
            .catch(err => console.log("-E- " + err))
    }

    return (
        <div className={className}>
            <Link to={"/products/" + productinfo._id}>{"Title:       " + productinfo.title}</Link>
            <p>{"Price:       " + productinfo.price}</p>
            <p>{"Description: " + productinfo.description}</p>
            <Button variant="contained" color="primary" onClick={deleteproduct}>
                delete
            </Button>

        </div>
    );
};