import React from 'react';
import { useState, useEffect } from 'react';
import { listEmployee, deleteEmployee } from '../../services/firebase';
import TesteProfile from '../../components/TesteProfile';
import Header from '../../components/Header/Header.js';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { makeStyles } from '@material-ui/styles';
import Loader from '../../components/Loader/index.js';

export default function ListEmployees() {
  const [employees, setEmployees] = useState([]);
  const [activeProfile, setActiveProfile] = useState(false);
  const [employeeSelected, setEmployeeSelected] = useState({});
  const [loading, setLoading] = useState(true);

 
  const useStyles = makeStyles({
    root: {
      'background-color': '#d5d9de',
      color: '#404040',
    },
    header:{
      'border-radius':'0.5rem',
    },
    row: {
      'background-color': '#f2f2f2',
      color: '#404040',
    },
    container: {
      'margin-top': '0',
      padding: '1rem',
      'padding-top': '0',
      border: 'none',
      'box-shadow': 'none',
      'background-color': '#f2f2f2',
      'border-collapse': 'collapse',
    },
  });

  const classes = useStyles();

  useEffect(() => {
    listEmployee().then((list) => {
      const newEmployees = [];
      list.forEach((doc) => {
        newEmployees.push({ ...doc.data(), id: doc.id, details: 'Mais' });
      });
      setEmployees(newEmployees);
      setTimeout(setLoading(false), 1000);
   
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
      field: 'role',
      headerName: 'Role',
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
      field: 'details',
      headerName: 'Ações',
      minWidth: 100,
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
    if (event.target.getAttribute('value') === 'Mais') {
      const id = event.target.getAttribute('data-item');
      const employee = employees.find((employee) => employee.id === id);
      setActiveProfile(true);
      setEmployeeSelected(employee);
    }
  };

  const handleCloseProfile = () => {
    setActiveProfile(false);
  };

  const handleDeleteEmployee = (employee) => {
    deleteEmployee(employee.id);
    const newArray = [...employees];
    setEmployees(newArray.filter((data) => data.id !== employee.id));
    setActiveProfile(false);
  };

  const [classInput, setClassInput] = useState('active-input');
  const [classButton, setClassButton] = useState('search');

  const [search, setSearch] = useState('');
  const [searchText, setSearchText] = useState('');

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const clickSearch = () => {
    setSearchText('');
    if (classButton === 'search') {
      if (search !== '') {
        setClassButton('goBack');
        const filteredEmployees = employees.filter((employee) => {
          return employee.name.toLowerCase().includes(search.toLowerCase());
        });
        setEmployees(filteredEmployees);
        setClassInput('inative-input');
        if (filteredEmployees.length === 0) {
          setSearchText('Nenhum usuário foi encontrado');
        }
      }
    } else {
      setClassButton('search');
      setClassInput('active-input');
      listEmployee().then((list) => {
        const newEmployees = [];
        list.forEach((doc) => {
          newEmployees.push({ ...doc.data(), id: doc.id, details: 'Mais' });
        });
        setEmployees(newEmployees);
      });
    }
  };

  return (
    <>
      {loading ? <Loader /> : false}
      <Header name="Colaboradores" />

      {activeProfile ? (
        <TesteProfile
          data={employeeSelected}
          onClick={handleCloseProfile}
          deleteEmployee={() => handleDeleteEmployee(employeeSelected)}
        />
      ) : (
        <Paper sx={{ width: '95%', boxShadow: 0}}>
          <div className="container-search">
            <div className="no-employee-container">
              <p className="no-employee">{searchText}</p>
            </div>
            <div className="input-btn-wrapper">
              <input
                className={classInput}
                type="text"
                placeholder="Pesquisar"
                value={search}
                name="search"
                onChange={onChange}></input>
              <span className="input-group-btn">
                <button
                  className={`btn-search ${classButton}`}
                  onClick={clickSearch}></button>
              </span>
            </div>
          </div>

          <TableContainer sx={{ maxHeight: 500 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead
                  className={classes.header}>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.field}
                      align={column.align}
                      style={{ top: 0, minWidth: column.minWidth }}
                      className={classes.root}>
                      {column.headerName}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {employees
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
                              data-item={row.id}
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
            rowsPerPageOptions={[6, 25, 100]}
            component="div"
            count={employees.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            className={classes.row}
          />
        </Paper>
      )}
    </>
  );
}