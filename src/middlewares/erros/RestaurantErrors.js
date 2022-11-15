import RestaurantValidations from '../../service/RestaurantValidations.js';

class RestaurantValidation {
  createValidationData(req, res, next) {
    const { error } = RestaurantValidations.restaurantBody(req.body);

    if (error) {
      return res.status(400).json({ message: 'Data is not valid.' });
    }

    return next();
  }

  updateValidationData(req, res, next) {
    const { error } = RestaurantValidations.restaurantBodyUpdate(req.body);

    if (error) {
      return res.status(400).json({ message: 'Data is not valid.' });
    }

    return next();
  }
}

export default new RestaurantValidation();
