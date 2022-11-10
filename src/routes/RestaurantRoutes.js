import Router from 'express';
import RestaurantController from '../controllers/RestaurantController';

const restaurantRouter = new Router();

restaurantRouter.get('/', RestaurantController.index);
restaurantRouter.get('/:name', RestaurantController.get);
restaurantRouter.post('/', RestaurantController.create);
restaurantRouter.put('/:name', RestaurantController.update);
restaurantRouter.delete('/:name', RestaurantController.delete);

export default restaurantRouter;
