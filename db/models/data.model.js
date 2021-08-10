const mongoose = require('mongoose');
const { dataSchemaOptions } = require('../options');

const DataSchema = new mongoose.Schema(dataSchemaOptions);
const Data = mongoose.model('Data', DataSchema, 'Data');

module.exports = Data;
