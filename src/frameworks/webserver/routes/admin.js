import adminController from '../../../adapters/controllers/adminController.js';
import adminRepository from '../../../application/repositories/adminRepository.js';
import adminRepositoryMongoDB from '../../database/mongoDB/repositories/adminRepositoryMongoDB.js';

export default function adminRouter(express) {
  const router = express.Router();

  const controller = adminController(
    adminRepository,
    adminRepositoryMongoDB,
  );

  // POST enpdpoints
  router.route('/signup').post(controller.addNewAdmin);
  return router;
}
