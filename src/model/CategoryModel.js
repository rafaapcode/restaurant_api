import prisma from '../prisma/client';

export default class Category {
  static async get(name) {
    try {
      const category = await prisma.category.findUniqueOrThrow({
        where: { name },
        select: {
          id: true,
          name: true,
        },
        include: {
          product: {
            select: {
              name: true,
            },
          },
        },
      });

      return { status: true, statusCode: 200, data: category };
    } catch (error) {
      return { status: false, statusCode: 404, message: 'Category not found.' };
    }
  }

  static async create(body) {
    try {
      const { name } = body;

      const category = await prisma.category.findUnique({ where: { name } });

      if (category) {
        return { status: false, statusCode: 400, message: 'Category already exists.' };
      }

      await prisma.category.create({
        data: { name },
      });

      return { status: true, statusCode: 201, message: 'Category Created' };
    } catch (error) {
      return { status: false, statusCode: 500, message: error.message };
    }
  }

  static async delete(id) {
    try {
      const category = await prisma.category.findUnique({ where: { id } });

      if (!category) {
        return { status: false, statusCode: 404, message: 'Category not found.' };
      }

      await prisma.category.delete({
        where: { id },
      });

      return { status: true, statusCode: 200, message: 'Category deleted with successfull !!' };
    } catch (error) {
      return { status: false, statusCode: 500, message: error.message };
    }
  }
}
