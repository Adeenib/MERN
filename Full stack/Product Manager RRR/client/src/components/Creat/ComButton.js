import React from 'react'
import { Button } from '@material-ui/core'

function ComButton({ value, ButtonHandler, className, type, style }) {



    return (

        <Button variant="contained" color="primary" type={type} style={style} className={className} onClick={() => ButtonHandler()} >
            {value}
        </Button>

    )
}

export default ComButton
