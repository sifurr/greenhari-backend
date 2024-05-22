import { Schema, model } from 'mongoose';
import { IProductModel, TInventory, TProduct, TVariants } from './product.interface';


const variantsSchema = new Schema<TVariants>({
  type: String,
  value: String,
});

const inventorySchema = new Schema<TInventory>({
  quantity: Number,
  inStock: Boolean,
});

const productSchema = new Schema<TProduct>({
  name: { type: String, required: true },
  description: { type: String, required: false },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: false },
  variants: { type: [variantsSchema], required: false },
  inventory: { type: inventorySchema, required: true },
});

export const ProductModel = model<TProduct, IProductModel>('Product', productSchema);
