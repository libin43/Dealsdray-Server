import addAdmin from '../../application/usecases/admin/add.js';

export default function adminController(
  adminRepository,
  adminRepositoryImpl,
) {
  const dbRepositoryAdmin = adminRepository(adminRepositoryImpl());
  console.log(dbRepositoryAdmin);
  const addNewAdmin = async (req, res, next) => {
    try {
      console.log(req.body, 'reached in admin controller');
      const {
        adminName,
        email,
        password,
      } = req.body;
      addAdmin(
        adminName,
        email,
        password,
        dbRepositoryAdmin,
      )
        .then((admin) => res.status(200).json({ success: true, message: 'Admin added successfully', admin }))
        .catch((err) => next(err));
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: true, message: 'Internal Server Error' });
    }
  };

  return {
    addNewAdmin,
  };
}
