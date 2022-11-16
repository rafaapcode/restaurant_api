import Productvalidations from '../../service/ProductValidations.js';

class ProductValidation {
  createValidationData(req, res, next) {
    const { error } = Productvalidations.productBody(req.body);

    if (error) {
      return res.status(400).json(
        {
          message: 'Name must be at least 7 characters. Price must be a number and it is required. RestaurantId e CategoryId must be a UUID and it is required. Promotion must be a boolean and it is required.',
        },
      );
    }

    return next();
  }

  updateValidationData(req, res, next) {
    const { error } = Productvalidations.productBodyUpdate(req.body);

    if (error) {
      return res.status(400).json({ message: 'Data is not valid.' });
    }

    return next();
  }
}

export default new ProductValidation();
