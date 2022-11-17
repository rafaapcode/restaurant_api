import Router from 'express';
import PromotionController from '../controllers/PromotionController';

const promotionRouter = new Router();

promotionRouter.post('/', PromotionController.create);
promotionRouter.put('/:id', PromotionController.update);
promotionRouter.delete('/:id', PromotionController.delete);

export default promotionRouter;
