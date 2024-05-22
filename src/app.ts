import cors from 'cors';
import express, { Request, Response } from 'express';
import { ProductRoutes } from './app/modules/product/product.route';
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// Product routes
app.use('/', ProductRoutes);

// testing endpoint
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
