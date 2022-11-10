import Restaurant from '../model/RestaurantModel.js';

export default class RestaurantController {
  static async index(req, res) {
    try {
      const restaurants = await Restaurant.index();

      if (restaurants.status) {
        return res.status(restaurants.statusCode).json(restaurants.data);
      }

      return res.status(restaurants.statusCode).json({ message: restaurants.message });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async get(req, res) {
    try {
      const { id } = req.params;

      const restaurant = await Restaurant.get(id);

      if (restaurant.status) {
        return res.status(restaurant.statusCode).json(restaurant.data);
      }

      return res.status(restaurant.statusCode).json({ message: restaurant.message });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async create(req, res) {
    try {
      const newRestaurant = await Restaurant.create(req.body);

      if (!newRestaurant.status) {
        return res.status(newRestaurant.statusCode).json({ message: newRestaurant.message });
      }

      return res.status(newRestaurant.statusCode).json({ message: newRestaurant.message });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const newRestaurant = await Restaurant.update(id, req.body);

      if (!newRestaurant.status) {
        return res.status(newRestaurant.statusCode).json({ message: newRestaurant.message });
      }

      return res.status(newRestaurant.statusCode).json({ message: newRestaurant.message });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      const deleted = await Restaurant.delete(id);

      if (!deleted.status) {
        return res.status(deleted.statusCode).json({ message: deleted.message });
      }

      return res.status(deleted.statusCode).json({ message: deleted.message });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
