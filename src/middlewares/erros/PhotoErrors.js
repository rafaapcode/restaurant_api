import PhotoProductValidations from '../../service/PhotoProductValidations';
import PhotoRestaurantValidations from '../../service/PhotoRestaurantValidations';

class PhotoValidation {
  createValidationDataProduct(req, res, next) {
    const { error } = PhotoProductValidations.fotoProductBody(req.body);

    if (error) {
      return res.status(400).json(
        {
          message: [
            'Url it is required.',
            'filename it is required',
            'productPhotoId is is required',
          ],
        },
      );
    }

    return next();
  }

  createValidationDataProductUpdate(req, res, next) {
    const { error } = PhotoProductValidations.fotoProductBodyUpdate(req.body);

    if (error) {
      return res.status(400).json(
        {
          message: 'Data is not valid',
        },
      );
    }

    return next();
  }

  createValidationDataRestaurant(req, res, next) {
    const { error } = PhotoRestaurantValidations.fotoRestaurantBody(req.body);

    if (error) {
      return res.status(400).json(
        {
          message: [
            'Url it is required.',
            'filename it is required',
            'productPhotoId is is required',
          ],
        },
      );
    }

    return next();
  }

  createValidationDataRestaurantUpdate(req, res, next) {
    const { error } = PhotoRestaurantValidations.fotoRestaurantBodyUpdate(req.body);

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

export default new PhotoValidation();
