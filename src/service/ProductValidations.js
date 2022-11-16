import joi from 'joi';

class ProductValidations {
  productBody(data) {
    const schema = joi.object({
      name: joi.string().min(7).required(),
      price: joi.number().required(),
      categoryId: joi.string().uuid().required(),
      restaurantId: joi.string().uuid().required(),
      promotion: joi.boolean().required(),
    });

    return schema.validate(data);
  }

  productBodyUpdate(data) {
    const schema = joi.object({
      name: joi.string().min(7),
      price: joi.number(),
      categoryId: joi.string().uuid(),
      restaurantId: joi.string().uuid(),
      promotion: joi.boolean(),
    });

    return schema.validate(data);
  }
}

export default new ProductValidations();
