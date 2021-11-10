import React from 'react';
import { useState, useEffect } from 'react';
import { listEmployee, deleteEmployee } from '../../services/firebase';
import TesteProfile from '../../components/TesteProfile';

import { DataGrid } from '@material-ui/data-grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { makeStyles } from '@material-ui/styles';



export default function ListEmployees() {
  const [employees, setEmployees] = useState([]);
  const [rows, setRows] = useState([]);
  const [activeProfile, setActiveProfile] = useState(false);
  const [employeeSelected, setEmployeeSelected] = useState({});

  // const StyledTableCell = styled(TableCell)(({ theme }) => ({
  //   [`&.${tableCellClasses.head}`]: {
  //     backgroundColor: theme.palette.common.black,
  //     color: theme.palette.common.white,
  //   },
  //   [`&.${tableCellClasses.body}`]: {
  //     fontSize: 14,
  //   },
  // }));

  const useStyles = makeStyles({
    root: {
      'background-color': '#285035',
      color: 'white',
    },
    row: {
      color: '#404040',
    },
    container:{
      
      'margin-top':'0',
      padding:'1rem',
      'padding-top':'0',
      border:'none',
      'box-shadow':'none',
      'background-color': '#F2F2F2 ',
      'border-collapse': 'collapse'
    }
  });

  const classes = useStyles();

  useEffect(() => {
    listEmployee().then((list) => {
      const newEmployees = [];
      const newRows = [];
      list.forEach((doc) => {
        newEmployees.push({ ...doc.data(), id: doc.id });
        newRows.push({ ...doc.data(), id: doc.id, details:`Mais`});
      });
      setEmployees(newEmployees);
      setRows(newRows);
      console.log(newEmployees);
    });
  }, []);

  const columns = [
    {
      field: 'name',
      headerName: 'Nome',
      minWidth: 150,
      align: 'left',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      field: 'lastName',
      headerName: 'Sobrenome',
      minWidth: 150,
      align: 'left',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      field: 'email',
      headerName: 'Email',
      minWidth: 150,
      align: 'left',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      field: 'phone',
      headerName: 'Telefone',
      minWidth: 150,
      align: 'left',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      field: 'details',
      headerName: 'Ações',
      minWidth: 100,
      align: 'left',
      format: (value) => value.toLocaleString('en-US'),
    },
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClickEmployee = (event) => {
    if (event.target.getAttribute('value') === 'Mais') {
      const id = event.target.getAttribute('data-item');
      const employee = rows.find((employee) => employee.id === id);
      console.log(employee);
      setActiveProfile(true);
      setEmployeeSelected(employee);
    }
  };

  const handleCloseProfile = () => {
    setActiveProfile(false);
  };

  const handleDeleteEmployee = (employee) => {
    deleteEmployee(employee.id);
    const newArray = [...rows];
    setRows(newArray.filter((data) => data.id !== employee.id));
    setActiveProfile(false);
  };

  return (
    <>
      {activeProfile ? (
        <TesteProfile
          data={employeeSelected}
          onClick={handleCloseProfile}
          deleteEmployee={() => handleDeleteEmployee(employeeSelected)}
          
        />
      ) : (
        <Paper sx={{ width: '95%' }} className={classes.container}>
          <TableContainer sx={{ maxHeight: 500 }} className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                {columns.map((column) => (
                  <TableCell
                    key={column.field}
                    align={column.align}
                    style={{ top: 0, minWidth: column.minWidth }}
                    className={classes.root}>
                    {column.headerName}
                  </TableCell>
                ))}
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.id}>
                        {columns.map((column) => {
                          const value = row[column.field];
                          return (
                            <TableCell
                              id={column.field}
                              data-item = {row.id}
                              key={column.field}
                              align={column.align}
                              value={value}
                              onClick={handleClickEmployee}
                              className={`${column.field} ${classes.row}`}>
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[8, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}
    </>
  );
}
