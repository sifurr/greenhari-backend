import { TProduct } from './product.interface';
import { ProductModel } from './product.model';

const createSingleProductIntoDB = async (product: TProduct) => {
  return await ProductModel.create(product);
};

const getProductsFromDB = async () => {
  return await ProductModel.find();
};

const getProductFromDB = async (productId: string) => {
  return await ProductModel.findById(productId);
};

const updateProductInDB = async (productId: string, updateData: TProduct) => {
  return await ProductModel.findByIdAndUpdate(productId, updateData, {
    new: true,
  });
};

const deleteProductFromDB = async (productId: string) => {
  return await ProductModel.findByIdAndDelete(productId);
};

export const ProductServices = {
  createSingleProduct: createSingleProductIntoDB,
  getProducts: getProductsFromDB,
  getProduct: getProductFromDB,
  updateProductInDB,
  deleteProductFromDB,
};
