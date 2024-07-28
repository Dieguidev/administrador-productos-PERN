import express from 'express';
import colors from 'colors';
import { router } from './router';
import { db } from './config/db';
import swaggerSpec, { swaggerUiOptions } from './config/swagger';
import swaggerUi from 'swagger-ui-express';

async function connectDB() {
  try {
    await db.authenticate()
    db.sync()
    console.log(colors.green('Connected to database'));


  } catch (error) {
    console.log(error);
    console.log(colors.red.bold('Could not connect to database'));
  }
}

connectDB()

export const server = express();

server.use(express.json());

server.use('/api', router)

server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec,swaggerUiOptions) )
