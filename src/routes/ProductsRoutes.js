import Router from 'express';
import ProductController from '../controllers/ProductController.js';
import ProductValidation from '../middlewares/erros/ProductErrors.js';

const productsRouter = new Router();

productsRouter.get('/:id', ProductController.get);
productsRouter.post('/', ProductValidation.createValidationData, ProductController.create);
productsRouter.put('/:id', ProductValidation.updateValidationData, ProductController.update);
productsRouter.delete('/:id', ProductController.delete);

export default productsRouter;
