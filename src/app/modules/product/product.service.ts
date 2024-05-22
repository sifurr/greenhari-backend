import { TProduct } from './product.interface';
import { ProductModel } from './product.model';

const createSingleProduct = async (product: TProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

const getProducts = async ()=>{
  const result = await ProductModel.find()
  return result;
}

export const ProductServices = {
  createSingleProduct,
  getProducts
}
