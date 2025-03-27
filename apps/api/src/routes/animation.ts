import { Router } from 'express';
import { AnimationController } from '../controllers/animation';
import { validateRequest } from '../middleware/validation';
import { authenticate } from '../middleware/auth';

const router = Router();
const controller = new AnimationController();

router.post(
    '/generate',
    authenticate,
    validateRequest,
    controller.generateAnimation
);

router.get(
    '/:id',
    authenticate,
    controller.getAnimation
);

router.get(
    '/user/:userId',
    authenticate,
    controller.getUserAnimations
);

export default router; 