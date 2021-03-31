const db = require('./db-manager'); 
const config = require('../config/config');

async function createTask(newTask){
    const client =await db.ConnectTo(config.default.db_url);
    const result = client.db("remembermedb").collection("tasks").insertOne(newTask);
    await db.CloseConnection(client);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}

async function getAllTasks(){
    const client = await db.ConnectTo(config.default.db_url);
    let retorno  = await client.db("remembermedb").collection("tasks").find().toArray();
    await db.CloseConnection(client);
    return retorno;
}

module.exports.createTask = createTask;
module.exports.getAllTasks = getAllTasks;