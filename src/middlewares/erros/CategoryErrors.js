import CatetegoryValidations from '../../service/CategoryValidations.js';

class CategoryValidation {
  createValidationData(req, res, next) {
    const { error } = CatetegoryValidations.categoryBody(req.body);

    if (error) {
      return res.status(400).json(
        {
          message: 'Name must be at least 7 characters.',
        },
      );
    }

    return next();
  }
}

export default new CategoryValidation();
