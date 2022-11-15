import Router from 'express';
import RestaurantController from '../controllers/RestaurantController';
import RestaurantValidation from '../middlewares/erros/RestaurantErrors.js';

const restaurantRouter = new Router();

restaurantRouter.get('/', RestaurantController.index);
restaurantRouter.get('/:id', RestaurantController.get);
restaurantRouter.post('/', RestaurantValidation.createValidationData, RestaurantController.create);
restaurantRouter.put('/:id', RestaurantValidation.updateValidationData, RestaurantController.update);
restaurantRouter.delete('/:id', RestaurantController.delete);

export default restaurantRouter;
