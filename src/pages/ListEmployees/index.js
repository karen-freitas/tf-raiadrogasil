import React from 'react';
import { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { listEmployee, deleteEmployee } from '../../services/firebase';
import TesteProfile from '../../components/TesteProfile'

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Header from '../../components/Header/Header.js';

export default function ListEmployees() {
  const [employees, setEmployees] = useState([]);
  const [rows, setRows] = useState([]);
  const [activeProfile, setActiveProfile] = useState(false)
  const [employeeSelected, setEmployeeSelected] = useState({})


  useEffect(() => {
    listEmployee().then((list) => {
      const newEmployees = [];
      const newRows = []
      list.forEach((doc) => {
        newEmployees.push({ ...doc.data(), id: doc.id });
        newRows.push({ ...doc.data(), id: doc.id, details: "Mais" })
      });
      setEmployees(newEmployees);
      setRows(newRows)
      console.log(newEmployees)
    });
  }, []);

  const columns = [
    
    {
      field: 'name',
      headerName: 'Nome',
      minWidth: 100,
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
      minWidth: 150,
      align: 'left',
      format: (value) => value.toLocaleString('en-US'),
    },
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(6);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClickEmployee = (event) => {
    if (event.target.getAttribute('value') === "Mais") {
      const id = event.target.getAttribute('id')
      const employee = rows.find((employee => employee.id === id))
      console.log(employee)
      setActiveProfile(true)
      setEmployeeSelected(employee)

    }
  };

  const handleCloseProfile = () => {
    setActiveProfile(false)
  }

  const handleDeleteEmployee = (employee) => {
    deleteEmployee(employee.id)
    const newArray = [...rows]
    setRows(newArray.filter(data => data.id !== employee.id))
    setActiveProfile(false)
  }


  return (
    <>
      <Header
        name="Empregados"
      />

      {activeProfile ? <TesteProfile data={employeeSelected} onClick={handleCloseProfile} deleteEmployee={() => handleDeleteEmployee(employeeSelected)} /> :
        (<Paper sx={{ width: '100%' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" colSpan={2}>
                    Country
                  </TableCell>
                  <TableCell align="center" colSpan={3}>
                    Details
                  </TableCell>
                </TableRow>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.field}
                      align={column.align}
                      style={{ top: 57, minWidth: column.minWidth }}>
                      {column.headerName}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.id} >
                        {columns.map((column) => {
                          const value = row[column.field];
                          return (
                            <TableCell
                              id={row.id}
                              key={column.field}
                              align={column.align}
                              value={value}
                              onClick={handleClickEmployee}
                              className={column.field}
                            >
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
            rowsPerPageOptions={[6, 10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>)}

    </>
  );
}