import { NextFunction, Request, Response } from 'express';

export const signIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).json({
      data: 'api signin',
    });
  } catch (err) {
    next(err);
  }
};
