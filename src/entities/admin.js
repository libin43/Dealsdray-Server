export default function admin(
  adminName,
  email,
  password,
) {
  return {
    getAdminName: () => adminName,
    getAdminEmail: () => email,
    getPassword: () => password,
  };
}
