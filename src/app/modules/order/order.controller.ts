import { Request, Response } from 'express';
import { OrderServices } from './order.service';
import orderValidationSchema from './order.validation';

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderDetails = req.body;
    const validatedOrderData = orderValidationSchema.parse(orderDetails);
    const result = await OrderServices.createOrderIntoDB(validatedOrderData);
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err || 'Something went wrong!',
      data: err,
    });
  }
};

export const OrderControllers = {
  createOrder,
};
