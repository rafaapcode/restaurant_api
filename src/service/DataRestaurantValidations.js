import joi from 'joi';

class Validations {
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
