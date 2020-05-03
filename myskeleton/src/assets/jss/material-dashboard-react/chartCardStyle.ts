// ##############################
// // // ChartCard styles
// #############################

import { StyleRules } from '@material-ui/core/styles';
import {
  blueCardHeader,
  card,
  cardActions,
  cardHeader,
  dangerColor,
  defaultFont,
  greyColor,
  greenCardHeader,
  infoColor,
  orangeCardHeader,
  primaryColor,
  redCardHeader,
  roseColor,
  successColor,
  warningColor,
} from 'assets/jss/material-dashboard-react';

const chartCardStyle: StyleRules = {
  card,
  cardHeader: {
    ...cardHeader,
    padding: '0',
    minHeight: '160px',
    ...defaultFont,
  },
  orangeCardHeader,
  greenCardHeader,
  redCardHeader,
  blueCardHeader,
  cardContent: {
    padding: '15px 20px',
  },
  cardTitle: {
    marginTop: '0',
    marginBottom: '5px',
    ...defaultFont,
    fontSize: '1.175em',
  },
  cardCategory: {
    marginBottom: '0',
    color: greyColor,
    ...defaultFont,
    fontSize: '0.9em',
  },
  cardActions: {
    ...cardActions,
    padding: '0!important',
  },
  cardStats: {
    lineHeight: '22px',
    color: greyColor,
    fontSize: '12px',
    display: 'inline-block',
    margin: '0!important',
  },
  cardStatsIcon: {
    position: 'relative',
    top: '4px',
    width: '16px',
    height: '16px',
  },
  warningCardStatsIcon: {
    color: warningColor,
  },
  primaryCardStatsIcon: {
    color: primaryColor,
  },
  dangerCardStatsIcon: {
    color: dangerColor,
  },
  successCardStatsIcon: {
    color: successColor,
  },
  infoCardStatsIcon: {
    color: infoColor,
  },
  roseCardStatsIcon: {
    color: roseColor,
  },
  greyCardStatsIcon: {
    color: greyColor,
  },
  cardStatsLink: {
    color: primaryColor,
    textDecoration: 'none',
    ...defaultFont,
  },
};

export default chartCardStyle;
