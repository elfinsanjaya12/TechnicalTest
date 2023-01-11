import jwt from 'jsonwebtoken';
import { IJWT_PAYLOAD } from './interfaces/jwt.interface';

export class JWTService {
  static signJwt(payload: IJWT_PAYLOAD) {
    return jwt.sign(payload, process.env.JWT_SECRET!);
  }

  static verifyToken(token: string): IJWT_PAYLOAD {
    return <IJWT_PAYLOAD>jwt.verify(token, process.env.JWT_SECRET!);
  }
}

export const generateAccessToken = (jwtPayload: IJWT_PAYLOAD): string => {
  return JWTService.signJwt(jwtPayload);
};
