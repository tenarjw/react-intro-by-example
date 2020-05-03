import { CSSProperties } from '@material-ui/core/styles/withStyles';

// tslint:disable:max-line-length

const drawerWidth = 260;

const transition: CSSProperties = {
  transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
};

const container: CSSProperties = {
  paddingRight: '5px',
  paddingLeft: '5px',
  marginRight: 'auto',
  marginLeft: 'auto',
};

const boxShadow: CSSProperties = {
  boxShadow:
    '0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
};

const card: CSSProperties = {
  display: 'inline-block',
  position: 'relative',
  width: '100%',
  margin: '5px 0',
  boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
  borderRadius: '3px',
  color: 'rgba(0, 0, 0, 0.87)',
  background: '#fff',
  overflow: 'visible',
};

const defaultFont: CSSProperties = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: 300,
  lineHeight: '1.5em',
};

const primaryColor = '#00acc1';
const warningColor = '#ff9800';
const blueColor = '#1976d2';
const dangerColor = '#f44336';
const successColor = '#4caf50';
const infoColor = '#00acc1';
const roseColor = '#e91e63';
const greyColor = '#9e9e9e';

const primaryBoxShadow: CSSProperties = {
  boxShadow:
    '0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)',
};
const infoBoxShadow: CSSProperties = {
  boxShadow:
    '0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)',
};
const successBoxShadow: CSSProperties = {
  boxShadow:
    '0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)',
};
const warningBoxShadow: CSSProperties = {
  boxShadow:
    '0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)',
};
const dangerBoxShadow: CSSProperties = {
  boxShadow:
    '0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)',
};

const orangeCardHeader: CSSProperties = {
  background: 'linear-gradient(60deg, #ffa726, #fb8c00)',
  ...warningBoxShadow,
};
const greenCardHeader: CSSProperties = {
  background: 'linear-gradient(60deg, #66bb6a, #43a047)',
  ...successBoxShadow,
};
const redCardHeader: CSSProperties = {
  background: 'linear-gradient(60deg, #ef5350, #e53935)',
  ...dangerBoxShadow,
};
const blueCardHeader: CSSProperties = {
  background: 'linear-gradient(60deg, #26c6da, #00acc1)',
  ...infoBoxShadow,
};
const greyCardHeader: CSSProperties = {
  background: 'linear-gradient(60deg, #e0e0e0, #e0e0e0)',
};

const cardActions: CSSProperties = {
  margin: '0 20px 10px',
  paddingTop: '10px',
  borderTop: '1px solid #eeeeee',
  height: 'auto',
  ...defaultFont,
};

const cardHeader: CSSProperties = {
  margin: '-10px 5px 0',
  borderRadius: '3px',
  padding: '5px',
};

const defaultBoxShadow: CSSProperties = {
  border: '0',
  borderRadius: '3px',
  boxShadow:
    '0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  padding: '10px 0',
  transition: 'all 150ms ease 0s',
};

export {
  drawerWidth,
  transition,
  container,
  boxShadow,
  card,
  defaultFont,
  primaryColor,
  blueColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  greyColor,
  primaryBoxShadow,
  infoBoxShadow,
  successBoxShadow,
  warningBoxShadow,
  dangerBoxShadow,
  orangeCardHeader,
  greenCardHeader,
  redCardHeader,
  blueCardHeader,
  greyCardHeader,
  cardActions,
  cardHeader,
  defaultBoxShadow,
};
