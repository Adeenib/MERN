import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MyHomeIcon from './HomeIcon';
import { navigate } from '@reach/router'
import Icons from './AddOne'
import Tooltip from '@material-ui/core/Tooltip';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    addIcon: {
        width: '50px',
        height: '50px',
        margin: '0',
        marginRight: '3rem'


    }

}));
const GoHome = () => {
    navigate('/')
}
const AddNew = () => {
    navigate('/new')
}

export default function DenseAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.root}>
                <Toolbar variant="dense">
                    <Tooltip title="Go Home" arrow>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" onClick={GoHome}>

                            <MyHomeIcon />

                        </IconButton>
                    </Tooltip>
                    <Typography variant="h6" color="inherit">
                        Favoret Authors
                    </Typography>

                </Toolbar>
                <Tooltip title="Ade New" arrow placement="left">
                    <IconButton edge='end' color="inherit" onClick={AddNew} className={classes.addIcon}>
                        <Icons />
                    </IconButton>
                </Tooltip>
            </AppBar>
        </div>
    );
}
