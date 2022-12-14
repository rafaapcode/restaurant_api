import joi from 'joi';

class CategoryValidations {
  categoryBody(data) {
    const schema = joi.object({
      name: joi.string().min(5).required(),
    });

    return schema.validate(data);
  }
}

export default new CategoryValidations();
