import { Router } from 'express';

import { cmsAuthRouter } from './v1/auth/router';

const router = Router();

router.use('/v1/sign-in', cmsAuthRouter);

export { router as appRouter };
