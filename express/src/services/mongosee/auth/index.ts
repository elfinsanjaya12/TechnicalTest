import { Request } from 'express';
import { User } from '../../../api/v1/users/model';
import { HistoryUser } from '../../../api/v1/history-users/model';
import { LoginDTO } from './interfaces/auth.dto';
import { BadRequestError } from '../../../errors/bad-request-error';
import { PasswordCompare } from '../password';
import { generateAccessToken } from '../../jwt';
import { LoginResponse } from './interfaces/auth.response';

export const authLogin = async (req: Request) => {
  const { email, password }: LoginDTO = req.body;

  const user = await User.findOne({ email });

  if (!user) throw new BadRequestError('EMAIL_NOT_FOUND');

  if (!PasswordCompare(password, user.password))
    throw new BadRequestError('PASSWORD_INVALID');

  const createHistoryUser = await HistoryUser.create({
    userId: user.id,
    timestampLogin: new Date(),
  });

  const accessToken = generateAccessToken({
    userId: user.id,
    email: user.email,
    historyUserId: createHistoryUser.id,
  });

  const response: LoginResponse = {
    email: email,
    userId: user.id,
    accessToken,
    historyUserId: createHistoryUser.id,
  };

  return response;
};

export const authLogout = async (req: Request) => {
  const findUser = await User.findOne({ _id: req.currentUser!.userId });

  if (!findUser) throw new BadRequestError('USER_ID_NOT_FOUND');

  const findHistoryUser = await HistoryUser.findOne({
    _id: req.currentUser!.historyUserId,
    userId: req.currentUser!.userId,
  });

  if (!findHistoryUser) throw new BadRequestError('HISTORY_USER_ID_NOT_FOUND');

  findHistoryUser.timestampLogout = new Date();

  let diff: number =
    findHistoryUser.timestampLogout.getTime() -
    findHistoryUser.timestampLogin.getTime();

  const minutes: number = Math.floor(diff / 60000);

  findHistoryUser.durationTime = minutes;
  await findHistoryUser.save();

  return { data: findHistoryUser };
};
