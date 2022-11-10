import express from 'express';
import dotenv from 'dotenv';
import restaurantRouter from './src/routes/RestaurantRoutes.js';

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.set('port', process.env.PORT);
  }

  routes() {
    this.app.use('/restaurant', restaurantRouter);
  }
}

export default new App().app;
