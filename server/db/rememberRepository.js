const db = require('./db-manager');
require('dotenv').config();
const uri = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false';
    
async function createTask(newTask){
    const client =await db.ConnectTo(uri);
    const result = client.db("remembermedb").collection("tasks").insertOne(newTask);
    await db.CloseConnection(client);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}

async function getAllTasks(){
    const client = await db.ConnectTo(uri);
    let retorno  = await client.db("remembermedb").collection("tasks").find().toArray();
    await db.CloseConnection(client);
    return retorno;
}

module.exports.createTask = createTask;
module.exports.getAllTasks = getAllTasks;