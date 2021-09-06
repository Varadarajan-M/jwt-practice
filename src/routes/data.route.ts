import express from 'express';
import authenticateUser from '../middlewares/auth';
const router = express.Router();
import {
	dataGetController,
	dataPostController,
} from '../controllers/data-controller';
router
	.route('/')
	.get(authenticateUser, dataGetController)
	.post(authenticateUser, dataPostController);

export default router;
