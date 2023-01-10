import { Router } from 'express';
import { signIn } from './controller';

const router = Router();
router.post('/', signIn);

export { router as cmsAuthRouter };
