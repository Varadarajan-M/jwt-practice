import express from 'express';
import registerController from '../controllers/registerController';

const router = express.Router();

router.route('/').post(registerController);

export default router;
