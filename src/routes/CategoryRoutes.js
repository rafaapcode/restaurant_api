import Router from 'express';
import CategoryController from '../controllers/CategoryController.js';
import CategoryValidation from '../middlewares/erros/CategoryErrors.js';

const categoryRouter = new Router();

categoryRouter.get('/', CategoryController.get);
categoryRouter.post('/', CategoryValidation.createValidationData, CategoryController.create);
categoryRouter.delete('/:id', CategoryController.delete);

export default categoryRouter;
