import {
  Hidden,
  IconButton,
  withStyles,
} from '@material-ui/core';
import { Person } from '@material-ui/icons';
import headerLinksStyle from 'assets/jss/material-dashboard-react/headerLinksStyle';
import { CustomSelect } from 'components';
import * as React from 'react';
import { Manager } from 'react-popper';

// https://github.com/popperjs/react-popper/issues/169

interface Props {
  classes? : any;
/*  classes: {
    margin: string;
    search: string;
    searchButton: string;
    searchIcon: string;
    buttonLink: string;
    notifications: string;
    links: string;
    linkText: string;
    popperResponsive: string;
    dropdown: string;
    dropdownItem: string;
    popperClose: string;
  };
  */
}

interface State {
  open: boolean;
  selectedVal: string;
}

class HeaderLinks extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { open: false , selectedVal: 'farm1' };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  public render() {
    const { classes } = this.props;
//    const { open } = this.state;

    return (
      <div>
        <Manager 
        //style={{ display: 'inline-block' }}
        >
        </Manager>
        <IconButton
          color="inherit"
          aria-label="Person"
          className={classes.buttonLink}
        >
          <Person className={classes.links} />
          <Hidden mdUp>
            <p className={classes.linkText}>Profile</p>
          </Hidden>
        </IconButton>
        <CustomSelect
          formControlProps={{
            className: classes.margin + ' ' + classes.search,
          }}
          inputProps={{
            placeholder: 'Choose your farm',
            inputProps: {
              'aria-label': 'Search',
            },
          }}
        />
      </div>
    );
  }

  private handleClick() {
    this.setState({ open: !this.state.open });
  }

  private handleClose() {
    this.setState({ open: false });
  }
  
}

export default withStyles(headerLinksStyle)(HeaderLinks);
