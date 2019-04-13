const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const Project = require('./project-model');
const User = require('./user-model');

const serviceSchema = new Schema({
  name: String,
  account: String,
  folio: String,
  address: String,
  owner: {type: Schema.Types.ObjectId, ref: 'User'} ,
  project: {type: Schema.Types.ObjectId, ref: 'Project'}
});

const Service = mongoose.model('Task', serviceSchema);

module.exports = Service;