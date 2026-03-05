import { login } from '../controllers/authController.js';

const loginSchema = {
  body: {
    type: 'object',
    required: ['username', 'password'],
    properties: {
      username: { type: 'string', minLength: 1 },
      password: { type: 'string', minLength: 1 }
    }
  }
};

export default async function authRoutes(fastify, options) {
  fastify.post('/login', { schema: loginSchema }, login);
}