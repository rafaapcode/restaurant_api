import joi from 'joi';

class PhotoProductValidations {
  fotoProductBody(data) {
    const schema = joi.object({
      url: joi.string().uri().required(),
      filename: joi.string().required(),
      productPhotoId: joi.string().uuid().required(),
    });

    return schema.validate(data);
  }

  fotoProductBodyUpdate(data) {
    const schema = joi.object({
      url: joi.string().uri(),
      filename: joi.string(),
      productPhotoId: joi.string().uuid(),
    });

    return schema.validate(data);
  }
}

export default new PhotoProductValidations();
