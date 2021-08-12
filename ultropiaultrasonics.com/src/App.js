import React from "react";
import Content from "./Components/Content";
import EntryCard from "./Components/EntryCard"
import { makeStyles } from '@material-ui/core/styles';
import VertBar from "./Components/VertBar"
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


import placeholder from './Components/Images/placeholder.jpg'

import "./static/App.css";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  overlay: {
    position: 'absolute', left: '60%', top: '20%',
    transform: 'translate(-60%, -20%)'
 }
}));

function App() { 
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <img className="mainImg" src={placeholder} alt="The ultropia prototype"/>
        <Grid container spacing={3}>
          <Grid item xs={3}>            
            <VertBar/>         
          </Grid>
          <Grid item xs={6}>
            <Container maxWidth="md" className={classes.overlay}>          
              <EntryCard/>
              
            </Container>   
            <Content/>
          </Grid>
          <Grid item xs={3}>            
            <VertBar/>         
          </Grid>
        </Grid>
      </div>      
      
  );
}

export default App;