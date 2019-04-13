const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const Task = require('./task-model');
const User = require('./user-model');

const projectSchema = new Schema({
  title: String,
  description: String,
  telephone: String,
  email: String,
  account: String,
  status: String,
  service: String,
  tasks: [{type: Schema.Types.ObjectId, ref: 'Task'}],
  owner: {type: Schema.Types.ObjectId, ref: 'User'} 
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;