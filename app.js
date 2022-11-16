import express from 'express';
import dotenv from 'dotenv';
import restaurantRouter from './src/routes/RestaurantRoutes.js';
import productsRouter from './src/routes/ProductsRoutes.js';
import categoryRouter from './src/routes/CategoryRoutes';

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
    this.app.use('/products', productsRouter);
    this.app.use('/category', categoryRouter);
  }
}

export default new App().app;
