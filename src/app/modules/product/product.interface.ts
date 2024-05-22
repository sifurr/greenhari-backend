import { Model } from "mongoose";

export type TVariants = {
  type: string;
  value: string;
};

export type TInventory = {
    quantity: number,
    inStock: boolean
}

export type TProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags?: string[];
  variants?: TVariants[];
  inventory: TInventory;
};


export type IProductModel = Model<TProduct>;