import prisma from '../prisma/client';
import validation from '../service/DataRestaurantValidations';

export default class Restaurant {
  static async get(name) {
    try {
      const restaurant = await prisma.restaurant.findUniqueOrThrow({
        where: { name },
        include: {
          photo_restaurant: { select: { filename: true, url: true } },
          product: {
            include: {
              category: {
                select: {
                  name: true,
                },
              },
              photo_product: {
                select: {
                  url: true,
                  filename: true,
                },
              },
              promo: {
                select: {
                  newPrice: true,
                  hours: true,
                  description: true,
                },
              },
            },
            select: {
              name: true,
              price: true,
              promotion: true,
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

      const { status } = await Restaurant.get(name);

      if (status) {
        return { status: false, statusCode: 400, message: 'Restaurant already exists.' };
      }

      const restaurant = await prisma.restaurant.create({ data: { name, address, hour } });

      return { status: true, statusCode: 201, data: restaurant };
    } catch (error) {
      return { status: false, statusCode: 500, message: error.message };
    }
  }

  static async index() {
    try {
      const restaurants = await prisma.restaurant.findMany({
        select: {
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

  static async update(name, body) {
    try {
      const { error } = validation.restaurantBodyUpdate(body);

      if (error) {
        return { status: false, statusCode: 400, message: error.message };
      }

      const { status } = await Restaurant.get(name);

      if (!status) {
        return { status: false, statusCode: 404, message: 'Restaurant not found.' };
      }

      await prisma.restaurant.update({
        where: { name },
        data: body,
      });

      return { status: true, statusCode: 200, message: 'Restaurant updated with successfull !!' };
    } catch (error) {
      return { status: false, statusCode: 500, message: error.message };
    }
  }

  static async delete(name) {
    try {
      const { status } = await Restaurant.get(name);

      if (!status) {
        return { status: false, statusCode: 404, message: 'Restaurant not found.' };
      }

      await prisma.restaurant.delete({
        where: { name },
      });

      return { status: true, statusCode: 200, message: 'Restaurant deleted with successfull !!' };
    } catch (error) {
      return { status: false, statusCode: 500, message: error.message };
    }
  }
}
