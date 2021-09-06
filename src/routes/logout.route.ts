import express from "express";

import logoutController from '../controllers/logout-controller'


const router = express.Router();

router.route("/").post(logoutController)

export default router;