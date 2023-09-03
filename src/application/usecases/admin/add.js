import adminValidator from '../../validation/adminValidator.js';
import admin from '../../../entities/admin.js';

export default async function addAdmin(
  adminName,
  email,
  password,
  dbRepositoryAdmin,
) {
  const res = adminValidator.validateSync(
    { adminName, email, password },
    { abortEarly: false },
  );
  // console.log(res,'hummmmmmmmmmm');
  // if (!res) {
  //   console.log('htting');
  //   throw new Error('Yup Schema Error');
  // }
  console.log(res, 'HELLO');
  const newAdmin = admin(
    adminName,
    email,
    password,
  );
  return dbRepositoryAdmin.signup(newAdmin);
}
