import React from 'react'
import { useState, useContext, useEffect } from 'react';
import TheBlueButton from '../basic/TheBlueButton';
import TheRedButton from '../basic/TheRedButton';
import TheInput from '../basic/TheInput';
import axios from 'axios'
import Box from '../basic/box';
import { RoutesContext } from '../context/RoutesContext'
import { navigate } from '@reach/router'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    buttonBox: {
        display: 'flex'
    }

}));
function CreateAuthor(props) {
    const [author, setAuthor] = useState()
    const [NameErr, setNameErr] = useState("")
    const [notFoundId, setNotFoundId] = useState(false);
    const [routes, setRoutes] = useContext(RoutesContext)
    const classes = useStyles();
    useEffect(() => {
        if (props.id) {
            axios.get(routes.Find + props.id)
                .then(res => setAuthor(res.data.name))
                .catch(err => setNotFoundId(true));
        }

    }, [props.id])


    const handleChange = e => {
        if (e.target.value.length < 3) {
            setNameErr('Name Should Be Long Than 3 Character')



        } else {
            setAuthor(e.target.value)
            setNameErr("");
        }
    }

    const handelSubmit = () => {
        if (!props.id) {

            axios.post(routes.Create, { name: author })
                .then(res => {
                    setAuthor("")
                })
                .catch(err => {
                    setNameErr(err.response.data.error.errors.name.message)


                })
        } else {
            axios.put(routes.Edit + props.id, { name: author })
                .then(author => navigate("/"))
                .catch(err => {
                    setNameErr(err.response.data.error.errors.name.message);
                });


        }

    }



    return (
        <>

            <Box Header='Add New Author'>
                < TheInput label='Name' value={author} handleChange={handleChange} err={NameErr} />
                <div className={classes.buttonBox}>
                    < TheBlueButton value="Submit" handleOnClick={handelSubmit} />
                    < TheRedButton value="cancel" handleOnClick={() => navigate('/')} color='secondary' />
                </div>
            </ Box>

        </>
    );

}

export default CreateAuthor
