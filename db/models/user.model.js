const mongoose = require('mongoose');
const { userSchemaOptions } = require('../options');

const UserSchema = new mongoose.Schema(userSchemaOptions);
const User = mongoose.model('User', UserSchema, 'Users');

module.exports = User;
