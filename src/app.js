import express from 'express';
import mongoose from 'mongoose';
import config from './config/config.js';
import expressConfig from './frameworks/webserver/express.js';
import mongoConnection from './frameworks/database/mongoDB/connection.js';
import routes from './frameworks/webserver/routes/index.js';

const app = express();
expressConfig(app, express);

// DB configuration and connection create
mongoConnection(mongoose, config, {
  autoIndex: false,
  connectTimeoutMS: 1000,
}).connectToMongo();

// routes for each endpoint
routes(app, express);

export default app;
