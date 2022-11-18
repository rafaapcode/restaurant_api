import Router from 'express';
import PromotionController from '../controllers/PromotionController';
import PromotionValidation from '../middlewares/erros/PromotionErrors';

const promotionRouter = new Router();

promotionRouter.post('/', PromotionValidation.createValidationData, PromotionController.create);
promotionRouter.put('/:id', PromotionValidation.updateValidationData, PromotionController.update);
promotionRouter.delete('/:id', PromotionController.delete);

export default promotionRouter;
