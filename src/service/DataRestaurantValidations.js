import joi from 'joi';

class Validations {
  restaurantBody(data) {
    const schema = joi.object({
      name: joi.string().min(7).required(),
      address: joi.string().min(5).required(),
      hour: joi.string().min(10).required(),
    });

    return schema.validate(data);
  }

  restaurantBodyUpdate(data) {
    const schema = joi.object({
      name: joi.string().min(7),
      address: joi.string().min(5),
      hour: joi.string().min(10),
    });

    return schema.validate(data);
  }

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
