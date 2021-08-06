import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > span': {
            margin: theme.spacing(0),
        },
    },
}));

export default function Icons() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Icon ><AddCircleOutlineIcon style={{ fontSize: 35 }} /></Icon>
        </div>
    );
}
