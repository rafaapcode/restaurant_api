import express from 'express';
import dotenv from 'dotenv';
import expressUI from 'swagger-ui-express';
import restaurantRouter from './src/routes/RestaurantRoutes';
import productsRouter from './src/routes/ProductsRoutes';
import categoryRouter from './src/routes/CategoryRoutes';
import promotionRouter from './src/routes/PromotionRoutes';
import photoProductRouter from './src/routes/PhotoProductRoutes';
import photoRestaurantRouter from './src/routes/PhotoRestaurantRoutes';
import Documentation from './src/config/documentaion.json';

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
    this.app.use('/photo-product', photoProductRouter);
    this.app.use('/photo-restaurant', photoRestaurantRouter);
    this.app.use('/docs', expressUI.serve, expressUI.setup(Documentation));
  }
}
export default new App().app;
