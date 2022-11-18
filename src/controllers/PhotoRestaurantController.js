import PhotoRestaurant from '../model/PhotoRestaurantModel';

export default class ProductController {
  static async create(req, res) {
    try {
      const productPhoto = await PhotoRestaurant.create(req.body);

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
      const productPhoto = await PhotoRestaurant.update(Number(id), { url, filename });

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
      const productPhoto = await PhotoRestaurant.delete(Number(id));

      if (!productPhoto.status) {
        return res.status(productPhoto.statusCode).json({ message: productPhoto.message });
      }

      return res.status(productPhoto.statusCode).json({ message: productPhoto.message });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
