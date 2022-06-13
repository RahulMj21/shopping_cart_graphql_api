import { PrismaClient } from "@prisma/client";

const findOrCreateCart = async (prisma: PrismaClient, id: number) => {
  let cart = await prisma.cart.findUnique({ where: { id } });
  if (!cart) {
    cart = await prisma.cart.create({ data: { id } });
  }
  return cart;
};

export default findOrCreateCart;
