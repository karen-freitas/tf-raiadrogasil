import { authConfig } from '../config';

const db = authConfig.firestore();
db.collection('teste');

export const registerEmployee = (values) =>
  db.collection('employees').add(values);

export const deleteEmployee = (id) =>
  db.collection('employees').doc(id).delete();

export const listEmployee = () => db.collection('employees').get();
