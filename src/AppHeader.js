import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// import logo from './Logo-vme.svg';
import {ReactComponent as Logo} from './Logo-vme.svg';
import {Link} from "react-router-dom";

const AppHeader = () =>
    <AppBar position="static" className="header">
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
                <Link to="/">
                    <Logo />
                </Link>
            </IconButton>
            <Typography variant="h3">
                Vidya Mandir Mylapore Admission
            </Typography>
        </Toolbar>
    </AppBar>;


export default AppHeader
