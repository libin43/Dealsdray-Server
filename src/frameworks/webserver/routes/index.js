import adminRouter from './admin.js';

export default function routes(app, express) {
  app.use('/api/v1/admin', adminRouter(express));
}
