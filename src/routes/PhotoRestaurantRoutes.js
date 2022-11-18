import Router from 'express';
import PhotoValidation from '../middlewares/erros/PhotoErrors';
import PhotoRestaurantController from '../controllers/PhotoRestaurantController';

const photoRestaurantRouter = new Router();

photoRestaurantRouter.put('/:id', PhotoValidation.createValidationDataRestaurantUpdate, PhotoRestaurantController.update);
photoRestaurantRouter.post('/', PhotoValidation.createValidationDataRestaurant, PhotoRestaurantController.create);
photoRestaurantRouter.delete('/:id', PhotoRestaurantController.delete);

export default photoRestaurantRouter;
