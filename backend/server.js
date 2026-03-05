import Fastify from 'fastify';
import sequelize from './config/database.js';

const fastify = Fastify({
  logger: true
});

fastify.get('/health', async (request, reply) => {
  return { status: 'server and database is active' };
});

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("connected successfully")

    const port = process.env.PORT;
    await fastify.listen({ port: port, host: '0.0.0.0' });
    
  } catch (error) {
    console.log("failed to start the server");
    console.log(error);
    process.exit(1);
  }
};

startServer();