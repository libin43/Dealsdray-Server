// import mongoose from 'mongoose';
import AdminModel from '../models/admin.js';

export default function adminRepositoryMongoDB() {
  const signup = (adminEntity) => {
    const newAdmin = new AdminModel({
      adminName: adminEntity.getAdminName(),
      email: adminEntity.getAdminEmail(),
      password: adminEntity.getPassword(),
    });
    return newAdmin.save();
  };
  return {
    signup,
  };
}
