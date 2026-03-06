import * as productService from '../services/productService.js';

export const getProducts = async (request, reply) => {
  try {
    const products = await productService.getProducts();

    return reply.code(200).send({ products });
  } catch (error) {
    request.log.error(error);
    return reply.code(500).send({
      message: 'Internal Server Error'
    });
  }
};

export const editProduct = async (request, reply) => {
  const { id } = request.params;
  const updatedData = request.body;

  try {
    const product = await productService.updateProduct(id, updatedData);

    return reply.code(200).send({
      product: product,
      message: 'product updated successfully'
    });
  } catch (error) {
    if (error.message === 'product not found') {
      return reply.code(404).send({
        message: `product not found: ${id}`
      });
    }
    request.log.error(error);
    return reply.code(500).send({
      message: 'Internal Server Error'
    });
  }
};
