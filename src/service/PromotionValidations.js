import joi from 'joi';

class PromotionValidations {
  createPromotionBody(data) {
    const schema = joi.object({
      newPrice: joi.number().positive().required(),
      description: joi.string().required(),
      hours: joi.string().required(),
      productId: joi.string().uuid().required(),
    });

    return schema.validate(data);
  }

  updatePromotionBody(data) {
    const schema = joi.object({
      newPrice: joi.number().positive(),
      description: joi.string(),
      hours: joi.string(),
      productId: joi.string().uuid(),
    });

    return schema.validate(data);
  }
}

export default new PromotionValidations();
