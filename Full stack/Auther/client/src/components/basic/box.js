import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Paper,
    Typography,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    root: {

        display: 'flex',
        /* padding: 50px; */
        minHeight: '17rem',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    box: {
        width: '40%',
        marginLeft: '30%',
        marginTop: '3rem'
    }


}));
export default function Box({ Header, children }) {
    let child
    children.length > 0 ? child = children : child = []
    const classes = useStyles();




    return (
        <div className={classes.box}>
            <Paper
                variant="elevation"
                elevation={2}
                className={classes.root}
            >
                <Grid item>
                    <Typography component="h1" variant="h5">
                        {Header}
                    </Typography>
                </Grid>



                {child.map((tag, index) =>


                    <Grid item key={index}>{tag}</Grid>
                )}




            </Paper >
        </div>



    )
}
