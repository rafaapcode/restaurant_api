import Router from 'express';
import PhotoValidation from '../middlewares/erros/PhotoErrors';
import PhotoProductController from '../controllers/PhotoProductController';

const photoProductRouter = new Router();

photoProductRouter.put('/:id', PhotoValidation.createValidationDataProductUpdate, PhotoProductController.update);
photoProductRouter.post('/', PhotoValidation.createValidationDataProduct, PhotoProductController.create);
photoProductRouter.delete('/:id', PhotoProductController.delete);

export default photoProductRouter;
