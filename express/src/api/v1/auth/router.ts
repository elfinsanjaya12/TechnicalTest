import { Router } from 'express';
import { login, logout } from './controller';
import { authentication } from '../../../middlewares/authentication';

const router = Router();
router.post('/login', login);
router.get('/logout', authentication, logout);

export { router as cmsAuthRouter };
