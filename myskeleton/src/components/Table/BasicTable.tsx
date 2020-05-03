import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TablePagination, 
  TableRow, 
  TableSortLabel, 
  withStyles 
} from '@material-ui/core';
import { Search } from '@material-ui/icons';
import tableStyle from 'assets/jss/material-dashboard-react/tableStyle';
import { CustomInput, IconButton as SearchButton } from 'components';
import * as React from 'react';

interface Props {
  classes? : any;
/*
  classes: {
    margin: string;
    marginTop: string;
    search: string;
    searchButton: string;
    searchIcon: string;
    table: string;
    tableResponsive: string;
    tableCell: string;
    tableHeadCell: string;
  };
*/
  tableHeaderColor?:
    | 'warning'
    | 'primary'
    | 'danger'
    | 'success'
    | 'info'
    | 'rose'
    | 'grey';
  tableHead?: string[];
  tableData?: string[][];
  tableOpt?: React.ReactNode;
  addButton?: React.ReactNode;
}

type Order = 'asc' | 'desc';

const BasicTable: React.SFC<Props> = props => {
  const { classes, tableHead, tableData, tableOpt, addButton, tableHeaderColor } = props;
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<number>(0);
  const [page, setPage] = React.useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(10);

  const tableRows =
    tableData &&
    tableData.map((rowProp, rowKey) => {

      const rowCells = rowProp.map((cellProp, cellKey) => (
        <TableCell className={classes.tableCell} key={cellKey}>
          {cellProp}
        </TableCell>
      ));

      return <TableRow key={rowKey}>{rowCells}{tableOpt}</TableRow>;
    });
  const createSortHandler = (property: number, orderC: Order) => (event: React.MouseEvent<unknown>) => {
      setOrderBy(property);
      setOrder(orderC === 'desc' ? 'asc' : 'desc');
    };
  
  const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
    }; 

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    }; 

  return (
    <div className={classes.tableResponsive + ' ' + classes.marginTop}>
      <CustomInput
          formControlProps={{
            className: classes.margin + ' ' + classes.search,
          }}
          inputProps={{
            placeholder: 'Search',
            inputProps: {
              'aria-label': 'Search',
            },
          }}
      />
      <SearchButton
          color="white"
          aria-label="edit"
          customClass={classes.margin + ' ' + classes.searchButton}
      >
      
      <Search className={classes.searchIcon} />
      </SearchButton>
      {addButton}
      <Table className={classes.table}>
        {tableHead && (
          <TableHead 
          className={classes[tableHeaderColor + 'TableHeader']}
          >
            <TableRow>
              {tableHead.map((prop, key) => (
                <TableCell
                  className={classes.tableCell + ' ' + classes.tableHeadCell}
                  key={key}
                >
                <TableSortLabel
                  active={key === orderBy}
                  direction={order}
                  onClick={createSortHandler(key, order)}
                >
                  {prop}
                </TableSortLabel>
                  
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        )}

        <TableBody>{tableRows}</TableBody>
      </Table>
      <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component="div"
          count={20}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
};

BasicTable.defaultProps = {
  tableHeaderColor: 'grey',
};

export default withStyles(tableStyle)(BasicTable);
