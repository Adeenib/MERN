import React, { useEffect } from 'react'
import { useState, useContext } from 'react';
import TheBlueButton from '../basic/TheBlueButton';
import TheRedButton from '../basic/TheRedButton';
import TheInput from '../basic/TheInput';
import axios from 'axios'
import { AuthorsContext } from '../context/authorsContext'
import Box from '../basic/box';
import { RoutesContext } from '../context/RoutesContext'
import { navigate } from '@reach/router'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    buttonBox: {
        display: 'flex'
    }

}));
function CreateAuthor() {
    const [author, setAuthor] = useState()
    const [authors, setAuthors] = useContext(AuthorsContext)
    const [NameErr, setNameErr] = useState("")
    const [routes, setRoutes] = useContext(RoutesContext)



    const handleChange = e => {
        if (e.target.value.length < 3) {
            setNameErr('Name Should Be Long Than 3 Character')



        } else {
            setAuthor(e.target.value)
            setNameErr("");
        }
    }

    const handelSubmit = () => {

        axios.post(routes.Create, { name: author })
            .then(res => {
                setAuthors([...authors, res.data])
                setAuthor("")
            })
            .catch(err => {
                setNameErr(err.response.data.error.errors.name.message)


            })


    }



    return (
        <>

            <Box Header='Add New Author'>
                < TheInput label='Name' value={author} handleChange={handleChange} err={NameErr} />
                <div>
                    < TheBlueButton value="Submit" handleOnClick={handelSubmit} />
                    < TheRedButton value="cancel" handleOnClick={() => navigate('/')} color='secondary' />
                </div>
            </ Box>

        </>
    );

}

export default CreateAuthor
