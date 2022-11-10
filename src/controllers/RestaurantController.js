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
      const { name } = req.params;

      const restaurant = await Restaurant.get(name);

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
      const { name } = req.params;
      const newRestaurant = await Restaurant.update(name, req.body);

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
      const { name } = req.params;
      const deleted = await Restaurant.delete(name);

      if (!deleted.status) {
        return res.status(deleted.statusCode).json({ message: deleted.message });
      }

      return res.status(deleted.statusCode).json({ message: deleted.message });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
