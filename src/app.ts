import cors from 'cors';
import express, { Request, Response } from 'express';
import { ProductRoutes } from './app/modules/product/product.route';
import { OrderRoutes } from './app/modules/order/order.route';
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// App routes
app.use('/', OrderRoutes);
app.use('/', ProductRoutes);

// testing endpoint
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
