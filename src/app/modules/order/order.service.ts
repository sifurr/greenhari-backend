import { TOrder } from './order.interface';
import { OrderModel } from './order.model';

const createOrderIntoDB = async (orderDetails: TOrder) => {
  const result = await OrderModel.create(orderDetails);
  return result;
};

const getOrdersFromDB = async (userEmail?: string) => {
  if (userEmail) {
    return await OrderModel.find({ email: { $eq: userEmail } });
  } else {
    return await OrderModel.find();
  }
};

export const OrderServices = {
  createOrderIntoDB,
  getOrdersFromDB,
};
