import Category from '../model/CategoryModel.js';

export default class CategoryController {
  static async get(req, res) {
    try {
      const { name } = req.query;
      const category = await Category.get(name);

      if (!category.status) {
        return res.status(category.statusCode).json({ message: category.message });
      }

      return res.status(category.statusCode).json({ data: category.data });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async create(req, res) {
    try {
      const category = await Category.create(req.body);

      if (!category.status) {
        return res.status(category.statusCode).json({ message: category.message });
      }

      return res.status(category.statusCode).json({ message: category.message });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      const category = await Category.delete(id);

      if (!category.status) {
        return res.status(category.statusCode).json({ message: category.message });
      }

      return res.status(category.statusCode).json({ message: category.message });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
