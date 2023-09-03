export default function adminRepository(repository) {
  const signup = (admin) => repository.signup(admin);
  return {
    signup,
  };
}
