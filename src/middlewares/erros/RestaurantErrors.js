import RestaurantValidations from '../../service/RestaurantValidations.js';

class RestaurantValidation {
  createValidationData(req, res, next) {
    const { error } = RestaurantValidations.restaurantBody(req.body);

    if (error) {
      return res.status(400).json({ message: 'Name must be at least 7 characters. Address must be at least 5 characters. Hour must be at least 10 characters.' });
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
