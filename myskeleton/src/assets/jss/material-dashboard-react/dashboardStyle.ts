// ##############################
// // // Dashboard styles
// #############################

import { successColor } from 'assets/jss/material-dashboard-react';

import { Theme, createStyles } from '@material-ui/core';
    
const dashboardStyle = (theme : Theme) => createStyles({
  successText: {
    color: successColor,
  },
  upArrowCardCategory: {
    width: 14,
    height: 14,
  },
});

export default dashboardStyle;
