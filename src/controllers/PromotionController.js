import Promotion from '../model/PromotionModel';

export default class PromotionController {
  static async update(req, res) {
    try {
      const { id } = req.params;
      const promotion = await Promotion.update(Number(id), req.body);

      if (!promotion.status) {
        return res.status(promotion.statusCode).json({ message: promotion.message });
      }

      return res.status(promotion.statusCode).json({ message: promotion.message });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async create(req, res) {
    try {
      const promotion = await Promotion.create(req.body);

      if (!promotion.status) {
        return res.status(promotion.statusCode).json({ message: promotion.message });
      }

      return res.status(promotion.statusCode).json({ message: promotion.message });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      const promotion = await Promotion.delete(Number(id));

      if (!promotion.status) {
        return res.status(promotion.statusCode).json({ message: promotion.message });
      }

      return res.status(promotion.statusCode).json({ message: promotion.message });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
