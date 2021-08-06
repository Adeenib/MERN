import React from 'react'
import { TextField } from '@material-ui/core'

function TheInput({ label, value, handleChange, err }) {
    return (
        <div>
            {err.length === 0 ?
                <TextField id="outlined-basic" label={label} variant="outlined" value={value} onChange={handleChange} />
                : <TextField
                    error
                    id="outlined-error-helper-text"
                    label="Error"
                    defaultValue={value}
                    helperText={err}
                    variant="outlined"
                    onChange={handleChange}
                />}

        </div>
    )
}

export default TheInput
