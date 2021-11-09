import React from 'react';
import { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { listEmployee } from '../../services/firebase';

export default function ListEmployees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    listEmployee().then((list) => {
      const newEmployees = [];
      list.forEach((doc) => {
        newEmployees.push({ ...doc.data(), id: doc.id });
      });
      setEmployees(newEmployees);
    });
  }, []);

  const columns = [
    {
      field: 'name',
      headerName: 'Nome',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Sobrenome',
      width: 300,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 150,
      editable: true,
    },
    {
      field: 'phone',
      headerName: 'Telefone',
      width: 150,
      editable: true,
    },
    {
      field: 'phone',
      headerName: 'Telefone',
      width: 150,
      editable: true,
    },
  ];

  return (
    <>
      <div style={{ height: 400, width: '80%' }}>
        <DataGrid
          rows={employees}
          columns={columns}
          pageSize={2}
          rowsPerPageOptions={[2]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </>
  );
}
