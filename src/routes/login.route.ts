import express from 'express';
import loginController from '../controllers/login-controller';

const router = express.Router();

router.route('/').post(loginController);

export default router;
