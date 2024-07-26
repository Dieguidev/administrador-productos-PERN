import express from 'express';
import colors from 'colors';
import { router } from './router';
import { db } from './config/db';

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
