import React from 'react';
import { IconButton, Badge } from '@material-ui/core';

import { connect } from 'react-redux';
import { AppState, Actions, store } from '../../store'

import { Theme, withStyles } from "@material-ui/core/styles";
import { PropTypes } from "@material-ui/core"
import Flag from 'react-flagkit'
import CONFIG from '../../cfg/config'

interface FlagIconsProps {
  classes? : any,
  redux? : any
}

class FlagIcons extends React.Component<FlagIconsProps, any> {
 
  public render() {
    const { classes, } = this.props;
    const lang = CONFIG.lang;

    let flgs : any[] = [];
    lang.map( ( c : string) => {
      if(CONFIG.lang.includes(c)){
        let bg='';
        let clr : PropTypes.Color;
        let cc : string;
        if (c=='en') cc='GB'
        else cc=c.toUpperCase()
        if (this.props.redux.lang==c) {bg='A';clr='secondary'}
        else  {bg='';clr= 'default'}
        flgs.push(

        <IconButton color="inherit" key={ cc }>
        <Badge badgeContent={bg} color={ clr }>
        <span onClick={ ()=>{ 
          store.dispatch(Actions.reduxStore.setLang( c ));
        }}>
        <Flag country={cc} />
        </span>
        </Badge>
        </IconButton>  
        );
        }
      }
    );

    return (
    <div className={ classes.itnl }>
      <div style={{paddingTop: "12px"}}>
{flgs}
      </div>
    </div>
  )}
}

const mapStateToProps = (state : AppState) => ({
    redux : state.reduxStore
  });
  
const styles = (theme : Theme) => ({
    itnl: {
      marginLeft : "2em",
      marginRight: '2em'
    }, 
}); 

export default connect(mapStateToProps)(withStyles(styles)(FlagIcons));
