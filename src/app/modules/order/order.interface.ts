import { Model } from 'mongoose';

export type TOrder = {
  email: string;
  productId: string;
  price: number;
  quantity: number;
  inStock?: boolean; 
};

export type IOrderModel = Model<TOrder>;
