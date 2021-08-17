const express = require('express');
const authenticateUser = require('../middlewares/auth')
const router = express.Router();
const {
	dataGetController,
	dataPostController,
} = require('../controllers/dataController');
router
	.route('/')
	.get(authenticateUser, dataGetController)
	.post(authenticateUser, dataPostController);

module.exports = router;
