import Product from '../model/ProductModel.js';

export default class ProductController {
  static async get(req, res) {
    try {
      const { id } = req.params;
      const product = await Product.get(id);

      if (!product.status) {
        return res.status(product.statusCode).json({ message: product.message });
      }

      const {
        id: idProduct, name, price, promotion, category, restaurant,
      } = product.data;

      return res.status(product.statusCode).json({
        data: {
          idProduct, name, price, promotion, category, restaurant,
        },
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async create(req, res) {
    try {
      const product = await Product.create(req.body);

      if (!product.status) {
        return res.status(product.statusCode).json({ message: product.message });
      }

      return res.status(product.statusCode).json({ message: product.message });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const product = await Product.update(id, req.body);

      if (!product.status) {
        return res.status(product.statusCode).json({ message: product.message });
      }

      return res.status(product.statusCode).json({ message: product.message });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      const product = await Product.delete(id);

      if (!product.status) {
        return res.status(product.statusCode).json({ message: product.message });
      }

      return res.status(product.statusCode).json({ message: product.message });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
