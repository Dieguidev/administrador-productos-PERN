import express from 'express';
import colors from 'colors';
import dotenv from "dotenv";
dotenv.config();
import morgan from 'morgan';
import cors, { CorsOptions } from 'cors'
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

//habilitar cors
const corsOption: CorsOptions = {
  origin: function (origin, callback) {

    if (origin === process.env.FRONTEND_URL) {
      callback(null, true)

    } else {
      callback(new Error('Not allowed by CORS'))

    }

  }
}
server.use(cors(corsOption))

server.use(express.json());

server.use('/api', router)

server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions))
