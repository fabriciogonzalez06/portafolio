import React from "react";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Box from '@material-ui/core/Box';
// import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import HideOnScroll from "./HideAppbar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    //backgroundColor: 'transparent'
  },
  toolbar: {
    minHeight: 100,
    alignItems: 'center',
    //flexDirection: 'row',
    // [theme.breakpoints.up('xs')]:{
    //   flexDirection: 'column'
    // },

    justifyContent: 'center',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2)
  },
  toolbarItems: {
    margin: '0 5px',
    cursor: 'pointer', 
    //color: 'black'
  }
}));

export default function HideAppBar(props) {

  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={classes.root} >
          <Toolbar className={classes.toolbar} >
            <Typography className={classes.toolbarItems} >Inicio</Typography>
            <Typography className={classes.toolbarItems} >Resumen</Typography>
            <Typography className={classes.toolbarItems} >Habilidades</Typography>
            <Typography className={classes.toolbarItems} >Estudiando</Typography>
            <Typography className={classes.toolbarItems} >Portafolio</Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}