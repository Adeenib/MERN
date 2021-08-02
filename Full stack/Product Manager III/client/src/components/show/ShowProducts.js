import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card } from './card';

const ShowProducts = () => {
    const [allProducts, setAllProducts] = useState([])

    useEffect(
        () => {
            axios.get("http://localhost:8000/api/products/")
                .then(res => {
                    setAllProducts(res.data.Products);
                })
        }, [allProducts]
    );

    return (
        <div className="flexBox">

            {allProducts.map((product, index) => {
                return (
                    <Card className="box" key={index} productinfo={product} />


                )
            })
            }


        </div>
    )
}

export default ShowProducts
