import joi from 'joi';

class Validations {
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
