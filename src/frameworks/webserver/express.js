import morgan from 'morgan';
import helmet from 'helmet';
import config from '../../config/config.js';

export default function expressConfig(app, express) {
  app.use((helmet));

  app.use(morgan('dev'));

  app.use(express.json());

  app.use(express.urlencoded({ extended: true }));

  app.listen(config.port, () => {
    console.log(`Dealsdray server running on port ${config.port}`);
  });
}
