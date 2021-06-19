import React, { useEffect, useState } from 'react'
import { Route, Switch, useHistory, } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
// eslint-disable-next-line no-unused-vars
import ListItemText from '@material-ui/core/ListItemText';
import { SideBar } from './SideBar';
import { Login } from './Login';
import { Books } from './Books';
import { SignUp } from './SignUp';

import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import setupInterceptors from '../interceptors';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },


}));




export const Main = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    let history = useHistory();
    setupInterceptors(history)
    const classes = useStyles();
    const [token,setToken] = useState(
        localStorage.getItem('token') || ""
    )
    const toggleDrawer = () => {

        setDrawerOpen(open => !open);
    };

    console.log("token from local",token)
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Library App
                    </Typography>
                    <Button color="inherit"><Link to = "/login">Login</Link></Button>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}  >
                <SideBar className={classes.list} />
            </Drawer>
            <Container>
                <Switch>
                    <Route exact path="/" render={(props) => (

                        <h1>Welcome To Library</h1>
                    )} />
                    <Route exact path="/books" render={(props) => (

                        <Books
                            token = {token}
                         />
                    )} />
                    <Route exact path="/login" render={(props) => (

                        <Login 
                            token = {token}
                            setToken ={setToken}
                            />
                    )} />
                    <Route exact path="/signup" render={(props) => (

                        <SignUp />
                    )} />
                </Switch>
            </Container>

            {/* <SignUp /> */}

        </div>

    );

}
