import prisma from '../prisma/client';

export default class PhotoRestaurant {
  static async update(id, body) {
    try {
      const photo = await prisma.foto_restaurant.findUnique({
        where: { id },
      });

      if (!photo) {
        return { status: false, statusCode: 4040, message: 'Photo not found' };
      }

      await prisma.foto_restaurant.update({
        where: { id },
        data: body,
      });

      return { status: true, statusCode: 200, message: 'Photo updated with success' };
    } catch (error) {
      return { status: false, statusCode: 404, message: error.message };
    }
  }

  static async create(body) {
    try {
      const { url, filename, restaurantPhotoId } = body;

      const { id } = await prisma.foto_restaurant.create({
        data: { url, filename, restaurantPhotoId },
      });

      return {
        status: true,
        statusCode: 201,
        message: [
          `Photo added to restaurant ${restaurantPhotoId}`,
          `Photo ID: ${id}`,
        ],
      };
    } catch (error) {
      return { status: false, statusCode: 500, message: error.message };
    }
  }

  static async delete(id) {
    try {
      const photo = await prisma.foto_restaurant.findUnique({ where: { id } });

      if (!photo) {
        return { status: false, statusCode: 404, message: 'Photo not found.' };
      }

      await prisma.foto_restaurant.delete({
        where: { id },
      });

      return { status: true, statusCode: 200, message: 'Photo deleted with successfull !!' };
    } catch (error) {
      return { status: false, statusCode: 500, message: error.message };
    }
  }
}
