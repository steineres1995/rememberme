var express = require('express');
var taskController = require('../controllers/taskController');
var router = express.Router();

router.get('/', function (req, res) {
  res.send('Tasks home page');
})

router.post('/create',taskController.create_task);
router.get('/all',taskController.get_all_tasks);

module.exports = router;