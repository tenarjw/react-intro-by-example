import { Theme, createStyles } from '@material-ui/core';
import {
  dangerColor,
  defaultFont,
  greyColor,
  infoColor,
} from 'assets/jss/material-dashboard-react';

const tableStyle = (theme : Theme) => createStyles({
  dangerTableHeader: {
    color: dangerColor,
  },
  infoTableHeader: {
    color: infoColor,
  },
  greyTableHeader: {
    color: greyColor,
  },
  table: {
    marginBottom: '0',
    marginTop: '0',
    width: '100%',
    maxWidth: '100%',
    backgroundColor: 'transparent',
    borderSpacing: '0',
    borderCollapse: 'collapse',
    sortDirection: 'asc',
    sortable: 'true',
  },
  tableHeadCell: {
    color: 'inherit',
    ...defaultFont,
    fontSize: '1em',
  },
  tableCell: {
    ...defaultFont,
    lineHeight: '1.42857143',
    padding: '12px 8px',
    verticalAlign: 'middle',
    sortDirection: 'asc',
    sortable: 'true',
    fontWeight: 'bolder',
  },
  tableResponsive: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  marginTop: {
    marginTop: '1px',
  },
});

export default tableStyle;
