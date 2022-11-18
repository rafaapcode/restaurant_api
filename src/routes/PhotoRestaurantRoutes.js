import Router from 'express';
import PhotoValidation from '../middlewares/erros/PhotoErrors';

const photoRestaurantRouter = new Router();

photoRestaurantRouter.put('/:id', PhotoValidation.createValidationDataRestaurant);
photoRestaurantRouter.post('/', PhotoValidation.createValidationDataRestaurantUpdate);
photoRestaurantRouter.delete('/:id');

export default photoRestaurantRouter;
