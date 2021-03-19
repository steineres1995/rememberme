const express = require('express')
const app = express()
const port = 3000
const db = require('./db/db-manager');

var taskRoute = require('./routes/task');
app.use(express.json());
app.use('/tasks',taskRoute);

app.get('/', (req, res) => res.send('Server Working'))

app.listen(port, () => console.log(`Remember me app listening on port ${port}!`))