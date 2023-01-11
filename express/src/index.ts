import express, { Express, Request, Response } from 'express';
import * as dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import helmet from 'helmet';
import mongoose from 'mongoose';

import { errorHandler } from './middlewares/error-handler';
import { appRouter } from './api/routes';

dotenv.config();
const app: Express = express();
const port: string = process.env.PORT ?? '3000';

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// image server
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req: Request, res: Response) => {
  res.send({ message: 'api calculator v.01' });
});

app.use('/api', appRouter);

app.use((req, res) => {
  res.status(404).send({ msg: 'Route does not exist' });
});

app.use(errorHandler);

const server = async () => {
  mongoose.set('strictQuery', false);
  mongoose.connect(`${process.env.MONGO_URL}`, () => {
    console.log('connected to database');
  });

  app.listen(port, () => console.log(`listening on port ${port}`));
};

server();
