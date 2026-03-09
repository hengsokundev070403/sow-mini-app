import Fastify from 'fastify';
import cors from '@fastify/cors';
import sequelize from './config/database.js';
import fastifyJwt from '@fastify/jwt';
import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';
import translationRoutes from './routes/translationRoutes.js';
import 'dotenv/config';

const fastify = Fastify({
  logger: true
});
await fastify.register(cors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH']
});
fastify.register(fastifyJwt, {
  secret: process.env.JWT_SECRET
});

fastify.get('/health', async (request, reply) => {
  return { status: 'server and database is active' };
});

fastify.register(authRoutes, { prefix: '/api/auth' });
fastify.register(translationRoutes, { prefix: '/api/translation' });
fastify.register(productRoutes, { prefix: '/api/product' });

const startServer = async () => {
  try {
    await sequelize.authenticate();
    const port = process.env.PORT;
    await fastify.listen({ port: port, host: '0.0.0.0' });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

startServer();
