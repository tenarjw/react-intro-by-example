// ##############################
// // // ProfileCard styles
// #############################

import {
  boxShadow,
  card,
  defaultFont,
  greyColor,
} from 'assets/jss/material-dashboard-react';

import { createStyles } from '@material-ui/core';
import { Theme } from "@material-ui/core/styles";

const profileCardStyle = (theme : Theme) => createStyles({
  card: {
    marginTop: '30px',
    textAlign: 'center',
    ...card,
  },
  cardHeader: {
    display: 'inline-block',
    width: '100%',
    padding: '0px',
  },
  cardAvatar: {
    maxWidth: '130px',
    maxHeight: '130px',
    margin: '-50px auto 0',
    borderRadius: '50%',
    overflow: 'hidden',
    ...boxShadow,
  },
  img: {
    width: '100%',
    height: 'auto',
    verticalAlign: 'middle',
    border: '0',
  },
  textAlign: {
    textAlign: 'center',
  },
  cardSubtitle: {
    color: greyColor,
    ...defaultFont,
    fontSize: '1em',
    textTransform: 'uppercase',
    marginTop: '10px',
    marginBottom: '10px',
  },
  cardTitle: {
    ...defaultFont,
    fontSize: '1.3em',
    marginTop: '10px',
    marginBottom: '10px',
  },
  cardDescription: {
    ...defaultFont,
    padding: '15px 20px',
    margin: '0 0 10px',
  },
  cardActions: {
    height: 'auto',
    display: 'inline',
  },
});

export default profileCardStyle;
