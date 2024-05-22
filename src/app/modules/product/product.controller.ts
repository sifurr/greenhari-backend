import { Request, Response } from 'express';
import { ProductServices } from './product.service';
import productValidationSchema from './product.validation';

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const validatedProduct = productValidationSchema.parse(product);
    const result = await ProductServices.createSingleProduct(validatedProduct);
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err || 'Something went wrong!',
      error: err,
    });
  }
};

const getProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getProducts();
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err || 'Something went wrong!',
      error: err,
    });
  }
};

const getProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getProduct(productId);
    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err || 'Something went wrong!',
      error: err,
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const {productId} = req.params; 
    const updateData = req.body;
    const validatedData = productValidationSchema.parse(updateData);
    const result = await ProductServices.updateProductInDB(productId, validatedData);    
    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err || 'Something went wrong!',
      error: err,
    });
  }
};



export const ProductControllers = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct
};
