import PhotoProduct from '../model/PhotoProductModel';

export default class ProductController {
  static async create(req, res) {
    try {
      const productPhoto = await PhotoProduct.create(req.body);

      if (!productPhoto.status) {
        return res.status(productPhoto.statusCode).json({ message: productPhoto.message });
      }

      return res.status(productPhoto.statusCode).json({ message: productPhoto.message });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const { url, filename } = req.body;
      const productPhoto = await PhotoProduct.update(Number(id), { url, filename });

      if (!productPhoto.status) {
        return res.status(productPhoto.statusCode).json({ message: productPhoto.message });
      }

      return res.status(productPhoto.statusCode).json({ message: productPhoto.message });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      const productPhoto = await PhotoProduct.delete(Number(id));

      if (!productPhoto.status) {
        return res.status(productPhoto.statusCode).json({ message: productPhoto.message });
      }

      return res.status(productPhoto.statusCode).json({ message: productPhoto.message });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
