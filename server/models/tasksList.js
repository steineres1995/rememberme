var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var taskListSchema = new Schema(
  {
    title: {type: String, required: true, max: 20},
    description: [{type: Schema.Types.ObjectId, ref: 'Task'}]
  }
);

taskListSchema
.virtual('title')
.get(function () {
  return this.title;
});

module.exports = mongoose.model('TaskList', taskListSchema);
