import { authConfig } from '../config';

const db = authConfig.firestore();
db.collection('teste');
console.log(db.collection('teste'));

export const registerEmployee = (
  employeeName,
  employeeLastName,
  employeeEmail,
  employeePhone,
) =>
  db.collection('employees').add({
    name: employeeName,
    lastName: employeeLastName,
    email: employeeEmail,
    phone: employeePhone,
  });

export const listEmployee = () => db.collection('employees').get();
