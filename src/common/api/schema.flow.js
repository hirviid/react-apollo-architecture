/* @flow */

declare type GraphQLResponseRoot = {
  data?: Query;
  errors?: Array<GraphQLResponseError>;
}

declare type GraphQLResponseError = {
  message: string;            // Required for all errors
  locations?: Array<GraphQLResponseErrorLocation>;
  [propName: string]: any;    // 7.2.2 says 'GraphQL servers may provide additional entries to error'
}

declare type GraphQLResponseErrorLocation = {
  line: number;
  column: number;
}

declare type Query = {
  catalogue: ?Catalogue;
}

declare type Catalogue = {
  products: Array<Product>;
}

declare type Product = {
  id: number;
  name: string;
  price: Price;
  description: string;
  distillery: string;
  content: string;
  region: string;
  country: string;
  alcohol: string;
  whiskyType: WhiskyType;
}

declare type Price = {
  value: number;
  currency: string;
}

declare type WhiskyType = "SINGLE_MALT" | "BLENDED" | "BOURBON";