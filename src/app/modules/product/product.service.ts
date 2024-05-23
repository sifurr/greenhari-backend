import { TProduct } from './product.interface';
import { ProductModel } from './product.model';

const createSingleProductIntoDB = async (product: TProduct) => {
  return await ProductModel.create(product);
};

const getProductsFromDB = async (searchTerm?: string) => {
  if (searchTerm && searchTerm !== '') {
    return await ProductModel.find({
      $text: { $search: searchTerm },
    });
  } else {
    return await ProductModel.find();
  }
};

const getProductFromDB = async (productId: string) => {
  const product = await ProductModel.findById(productId);
  if (!product) {
    throw new Error('No product');
  } else {
    return await ProductModel.findById(productId);
  }
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
  createSingleProductIntoDB,
  getProductsFromDB,
  getProductFromDB,
  updateProductInDB,
  deleteProductFromDB,
};
