import { getTranslation } from '../controllers/translationController.js';

const translationSchema = {
  params: {
    type: 'object',
    required: ['lang'],
    properties: {
      lang: { type: 'string', minLength: 5, maxLength: 5 }
    }
  }
};

export default async function translationRoutes(fastify, options) {
  fastify.get('/:lang', { schema: translationSchema }, getTranslation);
}
