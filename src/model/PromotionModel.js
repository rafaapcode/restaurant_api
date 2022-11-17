import prisma from '../prisma/client';
import Product from './ProductModel';

export default class Promotion {
  static async update(id, body) {
    try {
      const promotion = await prisma.promotion.findUnique({
        where: { id },
      });

      if (!promotion) {
        return { status: false, statusCode: 404, message: 'Promotion not found.' };
      }

      await prisma.promotion.update({
        where: { id },
        data: body,
      });

      return { status: true, statusCode: 200, message: 'Promotion updated with Success.' };
    } catch (error) {
      return { status: false, statusCode: 404, message: error.message };
    }
  }

  static async create(body) {
    try {
      const {
        newPrice, description, hours, productId,
      } = body;

      const promotion = await prisma.promotion.findUnique({ where: { productId } });

      if (promotion) {
        return { status: false, statusCode: 400, message: 'Promotion already exists. Update it.' };
      }

      const newPromotion = await prisma.promotion.create({
        data: {
          newPrice, description, hours, productId,
        },
      });

      await Product.update(productId, { promotion: true });

      return { status: true, statusCode: 201, message: [`Promotion add to  product: ${productId}`, `Promotion created with ID: ${newPromotion.id} `] };
    } catch (error) {
      return { status: false, statusCode: 500, message: error.message };
    }
  }

  static async delete(id) {
    try {
      const promotion = await prisma.promotion.findUnique({ where: { id } });

      if (!promotion) {
        return { status: false, statusCode: 404, message: 'Promotion not found.' };
      }

      await prisma.promotion.delete({
        where: { id },
      });

      await Product.update(promotion.productId, { promotion: false });

      return { status: true, statusCode: 200, message: 'Promotion deleted with successfull !!' };
    } catch (error) {
      return { status: false, statusCode: 500, message: error.message };
    }
  }
}
