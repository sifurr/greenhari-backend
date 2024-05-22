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

const getOrders = async (req: Request, res: Response) => {
  try {
    const userEmail = req.query.email as string;
    if (userEmail && typeof userEmail === 'string') {
      const result = await OrderServices.getOrdersFromDB(userEmail);
      res.status(200).json({
        success: true,
        message: `Orders fetched successfully for user email ${userEmail}!`,
        data: result,
      });
    } else {
      const result = await OrderServices.getOrdersFromDB(userEmail);
      res.status(200).json({
        success: true,
        message: `Orders fetched successfully!`,
        data: result,
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err || 'Something went wrong!',
      data: err,
    });
  }
};

export const OrderControllers = {
  createOrder,
  getOrders,
};
