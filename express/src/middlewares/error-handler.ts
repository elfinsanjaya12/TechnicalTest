import { Request, Response, NextFunction } from 'express';

import { CustomError } from '../errors/custom-error';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (process.env.ENV == 'development' || process.env.ENV == 'testing')
    console.error({ message: err.message, name: err.name, stack: err.stack });

  if (err instanceof CustomError) {
    return res.status(err.statusCode).send(err.serializeErrors());
  }

  res.status(500).send({
    code: 'INTERNAL_SERVER_ERROR',
    name: err.name,
    stakc: err.stack,
    errors: [{ message: err.message }],
  });
};
