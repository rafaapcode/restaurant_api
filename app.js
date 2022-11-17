import express from 'express';
import dotenv from 'dotenv';
import restaurantRouter from './src/routes/RestaurantRoutes';
import productsRouter from './src/routes/ProductsRoutes';
import categoryRouter from './src/routes/CategoryRoutes';
import promotionRouter from './src/routes/PromotionRoutes';

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
    this.app.use('/promotion', promotionRouter);
  }
}

export default new App().app;
