import { TProduct } from '../product/product.interface';
import { ProductModel } from '../product/product.model';
import { TOrder } from './order.interface';
import { OrderModel } from './order.model';

const createOrderIntoDB = async (orderDetails: TOrder) => {
  const result = await OrderModel.create(orderDetails);
  return result;
};

export const OrderServices = {
  createOrderIntoDB,
};
