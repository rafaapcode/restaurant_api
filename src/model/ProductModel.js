import prisma from '../prisma/client';

export default class Product {
  static async get(id) {
    try {
      const product = await prisma.product.findUniqueOrThrow({
        where: { id },
        select: {
          id: true,
          name: true,
          price: true,
        },
        include: {
          category: {
            select: {
              name: true,
            },
          },
          restaurant: {
            select: {
              name: true,
            },
          },
        },
      });

      return { status: true, statusCode: 200, data: product };
    } catch (error) {
      return { status: false, statusCode: 404, message: 'Product not found.' };
    }
  }

  static async create(body) {
    try {
      const {
        name, price, categoryId, restaurantId, promotion,
      } = body;

      const product = await prisma.product.findUnique({ where: { name } });

      if (product) {
        return { status: false, statusCode: 400, message: 'Product already exists.' };
      }

      await prisma.product.create({
        data: {
          name, price, categoryId, restaurantId, promotion,
        },
      });

      return { status: true, statusCode: 201, message: 'Product Created' };
    } catch (error) {
      return { status: false, statusCode: 500, message: error.message };
    }
  }

  static async update(id, body) {
    try {
      const { status } = await Product.get(id);

      if (!status) {
        return { status: false, statusCode: 404, message: 'Product not found.' };
      }

      await prisma.product.update({
        where: { id },
        data: body,
      });

      return { status: true, statusCode: 200, message: 'Product updated with successfull !!' };
    } catch (error) {
      return { status: false, statusCode: 500, message: error.message };
    }
  }

  static async delete(id) {
    try {
      const { status } = await Product.get(id);

      if (!status) {
        return { status: false, statusCode: 404, message: 'Product not found.' };
      }

      await prisma.product.delete({
        where: { id },
      });

      return { status: true, statusCode: 200, message: 'Product deleted with successfull !!' };
    } catch (error) {
      return { status: false, statusCode: 500, message: error.message };
    }
  }
}
