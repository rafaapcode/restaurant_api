import prisma from '../prisma/client';

export default class PhotoProduct {
  static async update(id, body) {
    try {
      const photo = await prisma.foto_product.findUnique({
        where: { id },
      });

      if (!photo) {
        return { status: false, statusCode: 404, message: 'Photo not found' };
      }

      await prisma.foto_product.update({
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
      const { url, filename, productPhotoId } = body;

      const { id } = await prisma.foto_product.create({
        data: { url, filename, productPhotoId },
      });

      return {
        status: true,
        statusCode: 201,
        message: [
          `Photo added to product ${productPhotoId}`,
          `Photo ID: ${id}`,
        ],
      };
    } catch (error) {
      return { status: false, statusCode: 500, message: error.message };
    }
  }

  static async delete(id) {
    try {
      const photo = await prisma.foto_product.findUnique({ where: { id } });

      if (!photo) {
        return { status: false, statusCode: 404, message: 'Photo not found.' };
      }

      await prisma.foto_product.delete({
        where: { id },
      });

      return { status: true, statusCode: 200, message: 'Photo deleted with successfull !!' };
    } catch (error) {
      return { status: false, statusCode: 500, message: error.message };
    }
  }
}
