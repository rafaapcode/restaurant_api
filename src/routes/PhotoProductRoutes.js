import Router from 'express';
import PhotoValidation from '../middlewares/erros/PhotoErrors';

const photoProductRouter = new Router();

photoProductRouter.put('/:id', PhotoValidation.createValidationDataProductUpdate);
photoProductRouter.post('/', PhotoValidation.createValidationDataProduct);
photoProductRouter.delete('/:id');

export default photoProductRouter;
