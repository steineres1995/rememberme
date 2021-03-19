const db = require('./db-manager');
require('dotenv').config();

async function createTask(newTask){
    const uri = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false';
    const client =await db.ConnectTo(uri);
    const result = await client.db("remembermedb").collection("tasks").insertOne(newTask);
    await db.CloseConnection(client);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}

module.exports.createTask = createTask;