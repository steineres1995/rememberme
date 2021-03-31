var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var taskSchema = new Schema(
  {
    title: {type: String, required: true, max: 20},
    description: {type: String, required: true, max: 100},
    created: {type: Date}
  }
);

taskSchema
.virtual('title')
.get(function () {
  return this.title;
});

module.exports = mongoose.model('Task', taskSchema);
