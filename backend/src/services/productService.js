import Product from '../models/Product.js';

export const getProducts = async () => {
  const productsList = await Product.findAll({ order: [['id', 'ASC']] });

  return productsList;
};

export const updateProduct = async (productId, updatedData) => {
  const product = await Product.findOne({
    where: { id: productId }
  });

  if (!product) {
    throw new Error('product not found');
  }

  const updatedProduct = await product.update(updatedData);
  return updatedProduct;
};
