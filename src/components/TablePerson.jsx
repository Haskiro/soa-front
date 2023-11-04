import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EnhancedTableHead from "./EnhancedTableHead";
import EnhancedTableToolbar from "./EnhancedTableToolbar";
import {rows} from "../mocks/personsMock";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  filtersSelector,
  pageParamsSelector, sortFieldsSelector
} from "../store/slices/Persons/Persons.selectors";
import {setPage, setPageSize} from "../store/slices/Persons/Persons.slice";
import {getPersons} from "../store/slices/Persons/Persons.thunks";
import {getFilterDeps} from "../utils/helpers/data-helpers";

export default function TablePerson() {
  const {
    pageSize: rowsPerPage,
    pageNumber: page
  } = useSelector(pageParamsSelector);
  // const persons = useSelector(personsSelector);
  const persons = rows;
  const filters = useSelector(filtersSelector);
  const sortFields = useSelector(sortFieldsSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPersons())
  }, [...getFilterDeps(filters), sortFields, page, rowsPerPage])


  const handleChangePage = (event, newPage) => {
    dispatch(setPage(newPage))
  };

  const handleChangeRowsPerPage = (event) => {
    dispatch(setPageSize(parseInt(event.target.value, 10)));
    dispatch(setPage(0))
  };

  const emptyRows = page > 0 ? Math.max(
    0,
    (1 + page) * rowsPerPage - rows.length
  ) : 0;

  return (<Box sx={{width: '100%'}}>
    <Paper sx={{
      width: '100%',
      mb: 2
    }}>
      <EnhancedTableToolbar/>
      <TableContainer>
        <Table
          sx={{minWidth: 750}}
          aria-labelledby="table of all persons"
        >
          <EnhancedTableHead/>
          <TableBody>
            {persons.map((row, index) => {
              const labelId = `enhanced-table-checkbox-${index}`;

              return (<TableRow
                key={row.id}
              >
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
                    width: 1 / 2,
                    p: 0,
                    borderBottom: 'none'
                  }}>{row.coordinates.x}</TableCell>
                  <TableCell align="left" sx={{
                    width: 1 / 2,
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
                    width: 1 / 3,
                    p: 0,
                    borderBottom: 'none'
                  }}>{row.location.x}</TableCell>
                  <TableCell align="left" sx={{
                    width: 1 / 3,
                    p: 0,
                    borderBottom: 'none'
                  }}>{row.location.y}</TableCell>
                  <TableCell align="left" sx={{
                    width: 1 / 3,
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