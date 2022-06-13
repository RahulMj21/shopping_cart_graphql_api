import { GraphQLResolveInfo } from 'graphql';
import { Cart as CartModel, CartItem as CartItemModel } from '@prisma/client';
import { GraphqlContext } from './src/index';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddCartItemInput = {
  cartId: Scalars['Int'];
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  image?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  price: Scalars['Int'];
  quantity: Scalars['Int'];
};

export type Cart = {
  __typename?: 'Cart';
  id: Scalars['Int'];
  items: Array<Maybe<CartItem>>;
  subTotal: Money;
  totalItems: Scalars['Int'];
};

export type CartItem = {
  __typename?: 'CartItem';
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  lineTotal: Money;
  name: Scalars['String'];
  quantity: Scalars['Int'];
  unitTotal: Money;
};

export type DecreaseCartItemQuantityInput = {
  cartId: Scalars['Int'];
  id: Scalars['Int'];
};

export type IncreaseCartItemQuantityInput = {
  cartId: Scalars['Int'];
  id: Scalars['Int'];
};

export type Money = {
  __typename?: 'Money';
  ammount: Scalars['Int'];
  formatted: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addCartItem?: Maybe<Cart>;
  decreaseCartItemQuantity?: Maybe<Cart>;
  increaseCartItemQuantity?: Maybe<Cart>;
  removeCartItem?: Maybe<Cart>;
};


export type MutationAddCartItemArgs = {
  input: AddCartItemInput;
};


export type MutationDecreaseCartItemQuantityArgs = {
  input: DecreaseCartItemQuantityInput;
};


export type MutationIncreaseCartItemQuantityArgs = {
  input: IncreaseCartItemQuantityInput;
};


export type MutationRemoveCartItemArgs = {
  input: RemoveCartItemInput;
};

export type Query = {
  __typename?: 'Query';
  cart?: Maybe<Cart>;
  greeting: Scalars['String'];
  hello: Scalars['String'];
};


export type QueryCartArgs = {
  id: Scalars['Int'];
};


export type QueryGreetingArgs = {
  name: Scalars['String'];
};

export type RemoveCartItemInput = {
  cartId: Scalars['Int'];
  id: Scalars['Int'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AddCartItemInput: AddCartItemInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Cart: ResolverTypeWrapper<CartModel>;
  CartItem: ResolverTypeWrapper<CartItemModel>;
  DecreaseCartItemQuantityInput: DecreaseCartItemQuantityInput;
  IncreaseCartItemQuantityInput: IncreaseCartItemQuantityInput;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Money: ResolverTypeWrapper<Money>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  RemoveCartItemInput: RemoveCartItemInput;
  String: ResolverTypeWrapper<Scalars['String']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AddCartItemInput: AddCartItemInput;
  Boolean: Scalars['Boolean'];
  Cart: CartModel;
  CartItem: CartItemModel;
  DecreaseCartItemQuantityInput: DecreaseCartItemQuantityInput;
  IncreaseCartItemQuantityInput: IncreaseCartItemQuantityInput;
  Int: Scalars['Int'];
  Money: Money;
  Mutation: {};
  Query: {};
  RemoveCartItemInput: RemoveCartItemInput;
  String: Scalars['String'];
}>;

export type CartResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['Cart'] = ResolversParentTypes['Cart']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  items?: Resolver<Array<Maybe<ResolversTypes['CartItem']>>, ParentType, ContextType>;
  subTotal?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CartItemResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['CartItem'] = ResolversParentTypes['CartItem']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lineTotal?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  unitTotal?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MoneyResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['Money'] = ResolversParentTypes['Money']> = ResolversObject<{
  ammount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  formatted?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addCartItem?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<MutationAddCartItemArgs, 'input'>>;
  decreaseCartItemQuantity?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<MutationDecreaseCartItemQuantityArgs, 'input'>>;
  increaseCartItemQuantity?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<MutationIncreaseCartItemQuantityArgs, 'input'>>;
  removeCartItem?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<MutationRemoveCartItemArgs, 'input'>>;
}>;

export type QueryResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  cart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<QueryCartArgs, 'id'>>;
  greeting?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<QueryGreetingArgs, 'name'>>;
  hello?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type Resolvers<ContextType = GraphqlContext> = ResolversObject<{
  Cart?: CartResolvers<ContextType>;
  CartItem?: CartItemResolvers<ContextType>;
  Money?: MoneyResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
}>;

