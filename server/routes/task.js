var express = require('express');
var taskController = require('../controllers/taskController');
var router = express.Router();

router.get('/', function (req, res) {
  res.send('Tasks home page');
})

router.post('/create',taskController.create_task);

module.exports = router;