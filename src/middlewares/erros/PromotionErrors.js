import PromotionValidations from '../../service/PromotionValidations';

class PromotionValidation {
  createValidationData(req, res, next) {
    const { error } = PromotionValidations.createPromotionBody(req.body);

    if (error) {
      return res.status(400).json(
        {
          message: [
            'NewPrice must be a number and it is required.',
            'Description must be a string and it is required.',
            'Hours must be a string and it is required.',
            'ProductId must be a UUID and it is required.',
          ],
        },
      );
    }

    return next();
  }

  updateValidationData(req, res, next) {
    const { error } = PromotionValidations.updatePromotionBody(req.body);

    if (error) {
      return res.status(400).json(
        {
          message: 'Data is not valid',
        },
      );
    }

    return next();
  }
}

export default new PromotionValidation();
