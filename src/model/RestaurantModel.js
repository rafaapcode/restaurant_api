import prisma from '../prisma/client';
import validation from '../service/DataRestaurantValidations';

export default class Restaurant {
  static async get(id) {
    try {
      const restaurant = await prisma.restaurant.findUniqueOrThrow({
        where: { id },
        include: {
          photo_restaurant: { select: { filename: true, url: true } },
          product: {
            select: {
              name: true,
              price: true,
              promotion: true,
              category: true,
            },
          },
        },
      });

      return { status: true, statusCode: 200, data: restaurant };
    } catch (error) {
      return { status: false, statusCode: 404, message: error.message };
    }
  }

  static async create(body) {
    try {
      const { error } = validation.restaurantBody(body);

      if (error) {
        return { status: false, statusCode: 400, message: error.message };
      }
      const { name, address, hour } = body;

      const restaurant = await prisma.restaurant.findUnique({ where: { name } });

      if (restaurant) {
        return { status: false, statusCode: 400, message: 'Restaurant already exists.' };
      }

      await prisma.restaurant.create({ data: { name, address, hour } });

      return { status: true, statusCode: 201, message: 'Restaurant Created' };
    } catch (error) {
      return { status: false, statusCode: 500, message: error.message };
    }
  }

  static async index() {
    try {
      const restaurants = await prisma.restaurant.findMany({
        select: {
          id: true,
          name: true,
          address: true,
          hour: true,
        },
      });

      return { status: true, statusCode: 200, data: restaurants };
    } catch (error) {
      return { status: false, statusCode: 500, message: error.message };
    }
  }

  static async update(id, body) {
    try {
      const { error } = validation.restaurantBodyUpdate(body);

      if (error) {
        return { status: false, statusCode: 400, message: error.message };
      }

      const { status } = await Restaurant.get(id);

      if (!status) {
        return { status: false, statusCode: 404, message: 'Restaurant not found.' };
      }

      await prisma.restaurant.update({
        where: { id },
        data: body,
      });

      return { status: true, statusCode: 200, message: 'Restaurant updated with successfull!!' };
    } catch (error) {
      return { status: false, statusCode: 500, message: error.message };
    }
  }

  static async delete(id) {
    try {
      const { status } = await Restaurant.get(id);

      if (!status) {
        return { status: false, statusCode: 404, message: 'Restaurant not found.' };
      }

      await prisma.restaurant.delete({
        where: { id },
      });

      return { status: true, statusCode: 200, message: 'Restaurant deleted with successfull !!' };
    } catch (error) {
      return { status: false, statusCode: 500, message: error.message };
    }
  }
}
