import React, { useState, useEffect } from 'react'
import { Button, TextField } from '@material-ui/core'
import ComButton from './ComButton';


function Form({ data, Handler, value }) {
    const [product, setProduct] = useState(data)



    const submitHandler = e => {
        e.preventDefault();
        Handler(product)

    }

    return (
        <div>



            <form className="newPrpForm" onSubmit={submitHandler} >
                <TextField id="standard-basic" label={product.title} onChange={e => setProduct({ title: e.target.value, price: product.price, description: product.description })} />
                <TextField id="standard-basic" label={product.price} type="number" onChange={e => setProduct({ title: product.title, price: e.target.value, description: product.description })} />
                <TextField id="standard-basic" label={product.description} onChange={e => setProduct({ title: product.title, price: product.price, description: e.target.value })} />

                <Button variant="contained" color="primary" type="submit">
                    {value}
                </Button>
            </form>



        </div>
    )
}

export default Form
