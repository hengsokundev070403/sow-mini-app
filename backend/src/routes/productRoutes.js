import { getProducts, editProduct } from '../controllers/productController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const updateProductSchema = {
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: { type: 'integer' }
    }
  },
  body: {
    type: 'object',
    properties: {
      article_no: { type: 'string' },
      product_name: { type: 'string' },
      in_price: { type: 'number' },
      price: { type: 'number' },
      unit: { type: 'string' },
      in_stock: { type: 'integer' },
      description: { type: 'string' }
    }
  }
};

export default async function productRoutes(fastify, options) {
  fastify.get(
    '/',
    {
      preHandler: [authenticate]
    },
    getProducts
  );
  fastify.patch(
    '/:id',
    {
      preHandler: [authenticate],
      schema: updateProductSchema
    },
    editProduct
  );
}
