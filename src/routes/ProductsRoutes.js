import Router from 'express';
import ProductController from '../controllers/ProductController.js';
import ProductValidation from '../middlewares/erros/ProductErrors.js';

const productsRouter = new Router();

productsRouter.get('/:id', ProductController.index);
productsRouter.post('/', ProductValidation.createValidationData, ProductController.create);
productsRouter.put('/:id', ProductValidation.updateValidationData);
productsRouter.delete('/:id');

export default productsRouter;
