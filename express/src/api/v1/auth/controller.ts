import { NextFunction, Request, Response } from 'express';
import { authLogin, authLogout } from '../../../services/mongosee/auth';

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

export const logout = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await authLogout(req);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};
