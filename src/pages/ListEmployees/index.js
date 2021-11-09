import React from 'react';
import { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { listEmployee } from '../../services/firebase';
import TesteProfile from '../../components/TesteProfile'

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

export default function ListEmployees() {
  const [employees, setEmployees] = useState([]);
  const [rows, setRows] = useState([]);
  const[activeProfile, setActiveProfile] = useState(false)
  const [employeeSelected, setEmployeeSelected] = useState({})

  const mockRows = [
    {
      name: 'mock1',
      lastName: 'mock',
      email: 'mock',
      phone: 'mock',
      details: 'Mais',
      id:"5265"
    },
    {
      name: 'mock2',
      lastName: 'mock',
      email: 'mock',
      phone: 'mock',
      details: 'Mais',
      id:"52h5"
    },
    {
      name: 'mock3',
      lastName: 'mock',
      email: 'mock',
      phone: 'mock',
      details: 'Mais',
      id:"56fd5"
    },
    {
      name: 'mock4',
      lastName: 'mock',
      email: 'mock',
      phone: 'mock',
      details: 'Mais',
      id:"565"
    },
    {
      name: 'mock5',
      lastName: 'mock',
      email: 'mock',
      phone: 'mock',
      details: 'Mais',
      id:"56r5"
    },
    {
      name: 'mock6',
      lastName: 'mock',
      email: 'mock',
      phone: 'mock',
      details: 'Mais',
      id:"526"
    },
    {
      name: 'mock7',
      lastName: 'mock',
      email: 'mock',
      phone: 'mock',
      details: 'Mais',
      id:"265"
    },
    {
      name: 'mock8',
      lastName: 'mock',
      email: 'mock',
      phone: 'mock',
      details: 'Mais',
      id:"65"
    },
    {
      name: 'mock9',
      lastName: 'mock',
      email: 'mock',
      phone: 'mock',
      details: 'Mais',
      id:"25"
    },
   
  ];

  // useEffect(() => {
  //   listEmployee().then((list) => {
  //     const newEmployees = [];
  //     const newRows = []
  //     list.forEach((doc) => {
  //       newEmployees.push({ ...doc.data(), id: doc.id });
  //       newRows.push({ ...doc.data(), id: doc.id, details:"Mais" })
  //     });
  //     setEmployees(newEmployees);
  //     setRows(newRows)
  //   });
  // }, []);

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
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClickEmployee = (event) => {
    if(event.target.getAttribute('value')==="Mais"){
      const id = event.target.getAttribute('id')
      const employee = mockRows.find((employee => employee.id===id))
      console.log(employee)
      setActiveProfile(true)
      setEmployeeSelected(employee)

    }
  };

  const handleCloseProfile = () =>{
    setActiveProfile(false)
  }

  return (
    <>
    {activeProfile?<TesteProfile data={employeeSelected} onClick={handleCloseProfile}/>:
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
          {mockRows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => {
              return (
                <TableRow  hover role="checkbox" tabIndex={-1} key={row.id} >
                  {columns.map((column) => {
                    const value = row[column.field];
                    return (
                      <TableCell
                        id={row.id}
                        key={column.field}
                        align={column.align}
                        value={value}
                        onClick={handleClickEmployee}
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
      rowsPerPageOptions={[10, 25, 100]}
      component="div"
      count={mockRows.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  </Paper>)}
    
  </>
  );
}
