import { gql } from "apollo-server-express";

const cart = gql`
  type Query {
    cart(id: Int!): Cart
  }

  type Mutation {
    addCartItem(input: AddCartItemInput!): Cart
    removeCartItem(input: RemoveCartItemInput!): Cart
    increaseCartItemQuantity(input: IncreaseCartItemQuantityInput!): Cart
    decreaseCartItemQuantity(input: DecreaseCartItemQuantityInput!): Cart
  }

  type Money {
    formatted: String!
    ammount: Int!
  }
  type CartItem {
    id: Int!
    name: String!
    description: String
    quantity: Int!
    image: String
    unitTotal: Money!
    lineTotal: Money!
  }
  type Cart {
    id: Int!
    items: [CartItem]!
    totalItems: Int!
    subTotal: Money!
  }
  input AddCartItemInput {
    id: Int!
    cartId: Int!
    name: String!
    description: String
    image: String
    price: Int!
    quantity: Int!
  }
  input RemoveCartItemInput {
    id: Int!
    cartId: Int!
  }
  input IncreaseCartItemQuantityInput {
    id: Int!
    cartId: Int!
  }
  input DecreaseCartItemQuantityInput {
    id: Int!
    cartId: Int!
  }
`;

export default cart;
