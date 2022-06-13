import { Resolvers } from "../../graphql";
import currencyFormatter from "currency-formatter";
import findOrCreateCart from "../utils/findOrCreateCart";

const currencyCode = "INR";

const cartResolvers: Resolvers = {
  Query: {
    cart: async (_, { id }, { prisma }) => {
      return await findOrCreateCart(prisma, id);
    },
  },
  Mutation: {
    addCartItem: async (_, { input }, { prisma }) => {
      const cart = await findOrCreateCart(prisma, input.cartId);
      await prisma.cartItem.upsert({
        where: {
          id_cartId: {
            id: input.id,
            cartId: input.cartId,
          },
        },
        update: {
          quantity: {
            increment: input.quantity || 1,
          },
        },
        create: {
          id: input.id,
          cartId: input.cartId,
          name: input.name,
          description: input.description,
          image: input.image,
          price: input.price,
          quantity: input.quantity || 1,
        },
      });
      return cart;
    },
    removeCartItem: async (_, { input }, { prisma }) => {
      const { cartId } = await prisma.cartItem.delete({
        where: { id_cartId: { id: input.id, cartId: input.cartId } },
        select: { cartId: true },
      });
      return await findOrCreateCart(prisma, cartId);
    },
    increaseCartItemQuantity: async (_, { input }, { prisma }) => {
      const { cartId } = await prisma.cartItem.update({
        data: {
          quantity: {
            increment: 1,
          },
        },
        where: {
          id_cartId: {
            id: input.id,
            cartId: input.cartId,
          },
        },
        select: { cartId: true },
      });
      return await findOrCreateCart(prisma, cartId);
    },
    decreaseCartItemQuantity: async (_, { input }, { prisma }) => {
      const { quantity, cartId } = await prisma.cartItem.update({
        data: {
          quantity: {
            decrement: 1,
          },
        },
        where: {
          id_cartId: {
            id: input.id,
            cartId: input.cartId,
          },
        },
        select: { cartId: true, quantity: true },
      });

      if (quantity <= 0) {
        await prisma.cartItem.delete({
          where: { id_cartId: { id: input.id, cartId } },
        });
      }

      return await findOrCreateCart(prisma, cartId);
    },
  },
  Cart: {
    items: async ({ id }, _, { prisma }) => {
      const items = await prisma.cart.findUnique({ where: { id } }).items();
      return items;
    },
    totalItems: async ({ id }, _, { prisma }) => {
      const items = await prisma.cart.findUnique({ where: { id } }).items();
      return items.reduce((prev, item) => prev + item.quantity || 1, 0);
    },
    subTotal: async ({ id }, _, { prisma }) => {
      const items = await prisma.cart.findUnique({ where: { id } }).items();
      const ammount =
        items.reduce(
          (total, item) => total + item.price * item.quantity || 0,
          0
        ) ?? 0;
      return {
        formatted: currencyFormatter.format(ammount / 100, {
          code: currencyCode,
        }),
        ammount,
      };
    },
  },
  CartItem: {
    unitTotal: (item) => {
      const ammount = item.price;

      return {
        ammount,
        formatted: currencyFormatter.format(ammount / 100, {
          code: currencyCode,
        }),
      };
    },
    lineTotal: (item) => {
      const ammount = item.quantity * item.price;

      return {
        ammount,
        formatted: currencyFormatter.format(ammount / 100, {
          code: currencyCode,
        }),
      };
    },
  },
};
export default cartResolvers;
