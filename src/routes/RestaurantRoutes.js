import Router from 'express';
import RestaurantController from '../controllers/RestaurantController';

const restaurantRouter = new Router();

restaurantRouter.get('/', RestaurantController.index);
restaurantRouter.get('/:id', RestaurantController.get);
restaurantRouter.post('/', RestaurantController.create);
restaurantRouter.put('/:id', RestaurantController.update);
restaurantRouter.delete('/:id', RestaurantController.delete);

export default restaurantRouter;
