import morgan from 'morgan';
import helmet from 'helmet';
import config from '../../config/config.js';

export default function expressConfig(app, express) {
  app.use((helmet()));

  app.use(morgan('dev'));

  app.use(express.json());

  app.use(express.urlencoded({ extended: true }));

  app.use((req, res, next) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    // Skip CORS for preflight requests
    if (req.method === 'OPTIONS') {
      res.sendStatus(200);
    } else {
      next();
    }
  });

  app.listen(config.port, () => {
    console.log(`Dealsdray server running on port ${config.port}`);
  });
}
