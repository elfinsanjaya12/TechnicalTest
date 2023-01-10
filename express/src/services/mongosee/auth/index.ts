import jwt from 'jsonwebtoken';
import { IJWT_PAYLOAD, IJWT_PAYLOAD_REFRESH } from './interfaces/jwt.interface';

export class JWTService {
  static signJwt(payload: IJWT_PAYLOAD | IJWT_PAYLOAD_REFRESH) {
    return jwt.sign(payload, process.env.JWT_SECRET!);
  }

  static verifyToken(token: string): IJWT_PAYLOAD | IJWT_PAYLOAD_REFRESH {
    return <IJWT_PAYLOAD | IJWT_PAYLOAD_REFRESH>(
      jwt.verify(token, process.env.JWT_SECRET!)
    );
  }
}

export const generateAccessToken = (
  jwtPayload: IJWT_PAYLOAD | IJWT_PAYLOAD_REFRESH
): string => {
  return JWTService.signJwt(jwtPayload);
};
