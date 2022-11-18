import joi from 'joi';

class PhotoRestaurantValidations {
  fotoRestaurantBody(data) {
    const schema = joi.object({
      url: joi.string().required(),
      filename: joi.string().required(),
      restaurantPhotoId: joi.string().uuid().required(),
    });

    return schema.validate(data);
  }

  fotoRestaurantBodyUpdate(data) {
    const schema = joi.object({
      url: joi.string().uri(),
      filename: joi.string(),
      restaurantPhotoId: joi.string().uuid(),
    });

    return schema.validate(data);
  }
}

export default new PhotoRestaurantValidations();
