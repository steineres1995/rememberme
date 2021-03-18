const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false';

async function ConnectTo(uri){
    const client = new MongoClient(uri,{ useUnifiedTopology: true});
    try {
        await client.connect();
    } catch (e) {
        console.error(e);
    }
    return client;
}

async function CloseConnection(client){
    await client.close();
    console.log("Se cierra conexion");
}


async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};  

module.exports.ConnectTo = ConnectTo;
module.exports.CloseConnection = CloseConnection;
module.exports.listDatabases = listDatabases;