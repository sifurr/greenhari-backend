import { ProductModel } from '../product/product.model';
import { TOrder } from './order.interface';
import { OrderModel } from './order.model';

const createOrderIntoDB = async (orderDetails: TOrder) => {
  const { productId, quantity } = orderDetails;

  // Find the product by ID from the products collection
  const product = await ProductModel.findById(productId);

  if (!product || product.inventory.quantity < quantity) {
    throw new Error('Insufficient stock');
  }

  // Update the inventory in product collection
  product.inventory.quantity -= quantity;
  if (product.inventory.quantity <= 0) {
    product.inventory.inStock = false;
  }
  await product.save();

  return await OrderModel.create(orderDetails);
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
