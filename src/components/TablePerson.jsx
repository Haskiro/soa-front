import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import EnhancedTableHead from "./EnhancedTableHead";
import EnhancedTableToolbar from "./EnhancedTableToolbar";
import {rows} from "../mocks/personsMock";
import {getComparator} from "../utils/helpers/data-helpers";
import {useEffect, useState} from "react";
import {getPersons} from "../api/service1";

export default function TablePerson() {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('id');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  //todo
  /*const [rows, setRows] = useState([]);

  useEffect(async() => {
    const res = await getPersons();
    setRows(res);
  }, [order, orderBy, page, rowsPerPage])
  */
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(
    0,
    (1 + page) * rowsPerPage - rows.length
  ) : 0;

  const visibleRows = React.useMemo(
    () => rows.slice().sort(getComparator(order, orderBy))
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage,),
    [order, orderBy, page, rowsPerPage],
  );

  return (<Box sx={{width: '100%'}}>
    <Paper sx={{
      width: '100%',
      mb: 2
    }}>
      <EnhancedTableToolbar numSelected={selected.length}/>
      <TableContainer>
        <Table
          sx={{minWidth: 750}}
          aria-labelledby="table of all persons"
        >
          <EnhancedTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
          />
          <TableBody>
            {visibleRows.map((row, index) => {
              const isItemSelected = isSelected(row.id);
              const labelId = `enhanced-table-checkbox-${index}`;

              return (<TableRow
                hover
                onClick={(event) => handleClick(event, row.id)}
                role="checkbox"
                aria-checked={isItemSelected}
                tabIndex={-1}
                key={row.id}
                selected={isItemSelected}
                sx={{cursor: 'pointer'}}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    checked={isItemSelected}
                    inputProps={{
                      'aria-labelledby': labelId,
                    }}
                  />
                </TableCell>
                <TableCell
                  component="th"
                  id={labelId}
                  scope="row"
                >
                  {row.id}
                </TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left" sx={{
                  display: 'flex'
                }}>
                  <TableCell align="left" sx={{
                    width: 1/2,
                    p: 0,
                    borderBottom: 'none'
                  }}>{row.coordinates.x}</TableCell>
                  <TableCell align="left" sx={{
                    width: 1/2,
                    p: 0,
                    borderBottom: 'none'
                  }}>{row.coordinates.y}</TableCell>
                </TableCell>
                <TableCell align="left">{new Date(row.creationDate).toLocaleDateString()}</TableCell>
                <TableCell align="left">{row.height}</TableCell>
                <TableCell align="left">{new Date(row.birthday).toLocaleDateString()}</TableCell>
                <TableCell align="left">{row.weight}</TableCell>
                <TableCell align="left">{row.nationality}</TableCell>
                <TableCell align="left" sx={{
                  display: 'flex',
                  width: '100%',
                }}>
                  <TableCell align="left" sx={{
                    width: 1/3,
                    p: 0,
                    borderBottom: 'none'
                  }}>{row.location.x}</TableCell>
                  <TableCell align="left" sx={{
                    width: 1/3,
                    p: 0,
                    borderBottom: 'none'
                  }}>{row.location.y}</TableCell>
                  <TableCell align="left" sx={{
                    width: 1/3,
                    p: 0,
                    borderBottom: 'none'
                  }}>{row.location.name}</TableCell>
                </TableCell>
                <TableCell align="left">{row.hairColor}</TableCell>
              </TableRow>);
            })}
            {emptyRows > 0 && (<TableRow
              style={{
                height: 53 * emptyRows,
              }}
            >
              <TableCell colSpan={6}/>
            </TableRow>)}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  </Box>);
}