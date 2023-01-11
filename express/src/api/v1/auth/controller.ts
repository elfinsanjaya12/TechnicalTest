import { NextFunction, Request, Response } from 'express';
import { authLogin } from '../../../services/mongosee/auth';

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await authLogin(req);
    res.status(200).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
