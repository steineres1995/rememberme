const repository = require('../db/rememberRepository');

exports.create_task = async function(req,res) {

    let ts = Date.now();

    let date_ob = new Date(ts);

    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();

    let fullDate= year + "-" + month + "-" + date;

    const newTask ={
        title: req.body.title,
        description: req.body.description,
        created: fullDate
    };

    await repository.createTask(newTask);

    res.send("Ready")
}

exports.get_all_tasks = async function(req,res){
   let retorno = await repository.getAllTasks(); 
   res.send(retorno);
}