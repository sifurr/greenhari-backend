import express from 'express';
import { OrderControllers } from './order.controller';

const router = express.Router();
router.post('/api/orders', OrderControllers.createOrder);
router.get('/api/orders', OrderControllers.getOrders);

export const OrderRoutes = router;
