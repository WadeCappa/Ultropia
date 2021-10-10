import React from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import GetInTouch from "./GetInTouch";

import Logo from './Images/ultropia2.png'

import { makeStyles } from '@material-ui/core/styles';

import useWindowDimensions from './WindowSize';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1),

      },
    paper: {
      padding: theme.spacing(2),
      width:'100%',

    },
    logostyle:{
        width:'100%', 
        paddingTop:'45px',
        [theme.breakpoints.down(750)]: {
            paddingTop:'45px',
            paddingBottom:'0px',
        },

    }, 
    overlay: {
        [theme.breakpoints.down(1250)]: {
          position: 'absolute', left: '50%', top: '15%',
          transform: 'translate(-50%, -15%)',
          minWidth:'800px'
        },
        [theme.breakpoints.up(1250)]: {
          position: 'absolute', left: '50%', top: '25%',
          transform: 'translate(-50%, -25%)',
          width:'1200px'
        },    
        [theme.breakpoints.down(750)]: {
          position: 'absolute', left: '50%', top: '10%',
          transform: 'translate(-50%, -10%)',
        },
        
    },

}));

function EntryCard() {
    const classes = useStyles();
    const { height, width } = useWindowDimensions();
    const mobilePaperSize = (inwidth) => ({
        width:360,
      });

    if (width >= 750) {
        return ( 
            <div className={classes.overlay}>
                <div style={{ maxWidth:'100%', textAlign:'center', alignSelf:'center'}}>
                    <img src={Logo} className={classes.logostyle} alt="Ultropia"/>
                    <div style={{textAlign:'center', paddingBottom:'10px', paddingTop:'0px'}}>
                        <ButtonGroup    >
                            <div style={{textAlign:'left', paddingRight:'200px'}}>
                                <GetInTouch />
                            </div>
                            <div style={{textAlign:'right'}}>
                                <Button disableElevation  variant="contained" color="secondary" orientation="horizontal"  href='https://www.linkedin.com/company/ultropia/' 
                                >
                                    About us
                                </Button>
                            </div>
                        </ButtonGroup>
                    </div>
                </div>    
            </div>
        )
    }
    else {
        return ( 
            <div className={classes.overlay} style={{textAlign:'center'}} >
                <div>
                <img src={Logo} style={{width:360}} alt="Ultropia"/>
                </div>
                    <ButtonGroup   style={{paddingTop:'25px'}} >
                        <div style={{textAlign:'left', paddingRight:'60px' }}>
                            <GetInTouch />
                        </div>
                        <div style={{textAlign:'right'}}>
                            <Button disableElevation  variant="contained" color="secondary" orientation="horizontal"  href='https://www.linkedin.com/company/ultropia/' 
                            >
                                About us
                            </Button>
                        </div>
                    </ButtonGroup>
            
            </div>
        // <Paper className={mobilePaperSize(360)}>
        //         <img src={Logo} style={{width:'50%'}} alt="Ultropia"/>
        //         <div style={{textAlign:'center', paddingBottom:'10px', paddingTop:'0px'}}>
        //             <ButtonGroup    >
        //                 <div style={{textAlign:'left'}}>
        //                     <GetInTouch />
        //                 </div>
        //                 <div style={{textAlign:'right'}}>
        //                     <Button disableElevation  variant="contained" color="secondary" orientation="horizontal"  href='https://www.linkedin.com/company/ultropia/' 
        //                     >
        //                         About us
        //                     </Button>
        //                 </div>
        //             </ButtonGroup>
        //         </div>
        //     </Paper>    

            // <div className={classes.overlay}>
            //     <Paper style={{ borderRadius:25,  alignSelf:'center'}}>
            //         <div style={{width:'100%'}}>
            //             <img src={Logo} className={classes.logostyle} alt="Ultropia"/>
            //         </div>
            //     </Paper>   
            //     <Paper style={{borderRadius:25,  width:'100%', alignSelf:'center', textAlign:'center'}}>
            //         <div style={{padding:'10px', margin:'10px'}}> 
            //             <ButtonGroup   color="secondary" orientation="horizontal"  >
            //                 <div style={{textAlign:'left', paddingRight:'50px'}}>
            //                     <GetInTouch />
            //                 </div>
            //                 <div style={{textAlign:'right'}}>
            //                     <Button disableElevation  variant="contained" color="secondary" orientation="horizontal"  href='https://www.linkedin.com/company/ultropia/' 
            //                     >
            //                         About us
            //                     </Button>
            //                 </div>
                
            //             </ButtonGroup>
            //         </div>
            //     </Paper>
            // </div>
        )
    }
        

  }
  
  export default EntryCard;
