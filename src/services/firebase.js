import { authConfig } from '../config';

const db = authConfig.firestore();
db.collection('teste');

export const registerEmployee = (values) =>
  db.collection('employees').add(values);

export const deleteEmployee = (id) =>
  db.collection('employees').doc(id).delete();

export const updateEmployeeProfile = (id, newName, newLastName, newEmail, newPhone, newAddress, newCep, newRole) =>
  db.collection('employees').doc(id).update({
    name: newName,
    lastName: newLastName,
    email: newEmail,
    phone: newPhone,
    address: newAddress,
    cep: newCep,
    role: newRole,
  });

export const listEmployee = () => db.collection('employees').orderBy('name', 'asc').get();
