import joi from 'joi';

class Validations {
  categoryBody(data) {
    const schema = joi.object({
      name: joi.string().min(7).required(),
    });

    return schema.validate(data);
  }

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

  promotionBody(data) {
    const schema = joi.object({
      newPrice: joi.number().required(),
      description: joi.string(5).required(),
      hours: joi.string().required(),
      productId: joi.string().uuid().required(),
    });

    return schema.validate(data);
  }

  fotoProductBody(data) {
    const schema = joi.object({
      url: joi.string(5).required(),
      filename: joi.string().required(),
      productPhotoId: joi.string().uuid().required(),
    });

    return schema.validate(data);
  }

  fotoRestaurantBody(data) {
    const schema = joi.object({
      url: joi.string(5).required(),
      filename: joi.string().required(),
      restaurantPhotoId: joi.string().uuid().required(),
    });

    return schema.validate(data);
  }
}

export default new Validations();
