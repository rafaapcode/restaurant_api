import joi from 'joi';

class RestaurantValidations {
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
}

export default new RestaurantValidations();
