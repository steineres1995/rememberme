const repository = require('../db/rememberRepository');
const serviceTask = require('../services/task_service');

exports.create_task = async function(req,res) {

    let task = serviceTask.createTask(req.title, req.description);
    await repository.createTask(task);
    res.send("Ready")
}

exports.get_all_tasks = async function(req,res){
   let retorno = await repository.getAllTasks(); 
   res.send(retorno);
}