const TaskController = require('../src/controllers/taskController');

test('adds 1 + 2 to equal 3', () => {
  expect(TaskController.get_all_tasks).toBe(3);
});