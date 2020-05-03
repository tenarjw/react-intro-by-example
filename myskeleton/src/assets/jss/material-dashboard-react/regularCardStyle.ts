// ##############################
// // // RegularCard styles
// #############################

import { StyleRules } from '@material-ui/core/styles';
import {
  blueCardHeader,
  greyCardHeader,
  card,
  cardHeader,
  defaultFont,
  greenCardHeader,
  orangeCardHeader,
  redCardHeader,
} from 'assets/jss/material-dashboard-react';

const regularCardStyle: StyleRules = {
  card,
  cardPlain: {
    background: 'transparent',
    boxShadow: 'none',
  },
  cardHeader: {
    ...cardHeader,
    ...defaultFont,
  },
  cardPlainHeader: {
    marginLeft: 0,
    marginRight: 0,
  },
  orangeCardHeader,
  greenCardHeader,
  redCardHeader,
  blueCardHeader,
  greyCardHeader,
  cardTitle: {
    color: '#e0e0e0',
    marginTop: '0',
    marginBottom: '5px',
    ...defaultFont,
    fontSize: '1.125em',
  },
  cardSubtitle: {
    ...defaultFont,
    marginBottom: '0',
    color: 'rgba(255, 255, 255, 0.62)',
    margin: '0 0 1px',
  },
  cardActions: {
    padding: '14px',
    display: 'block',
    height: 'auto',
    textAlign: 'center',
  },
};

export default regularCardStyle;
