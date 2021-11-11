import { authConfig } from '../config';

const db = authConfig.firestore();
db.collection('teste');

export const registerEmployee = (values) =>
  db.collection('employees').add(values);

export const deleteEmployee = (id) =>
  db.collection('employees').doc(id).delete();

export const updateEmployeeProfile = (
  id,
  newName,
  newLastName,
  newEmail,
  newPhone,
  newAddress,
  newCep,
  newRole,
  newNumber,
  newDistrict,
  newCity,
  newState,
  newgender,
) =>
  db.collection('employees').doc(id).update({
    name: newName,
    lastName: newLastName,
    email: newEmail,
    phone: newPhone,
    role: newRole,
    cep: newCep,
    address: newAddress,
    number: newNumber,
    district: newDistrict,
    city: newCity,
    state: newState,
    gender: newgender,
  });

export const listEmployee = () => db.collection('employees').orderBy('name', 'asc').get();
