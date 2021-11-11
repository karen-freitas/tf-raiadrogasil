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
  newCep,
  newAddress,
  newNumber,
  newDistrict,
  newCity,
  newState,
  newRole,
  newColor,
  newGender,
  newDeficiency,
) =>
  db.collection('employees').doc(id).update({
    name: newName,
    lastName: newLastName,
    email: newEmail,
    phone: newPhone,
    cep: newCep,
    address: newAddress,
    number: newNumber,
    district: newDistrict,
    city: newCity,
    state: newState,
    role: newRole,
    color: newColor,
    gender: newGender,
    deficiency: newDeficiency,
  });

export const listEmployee = () => db.collection('employees').orderBy('name', 'asc').get();
