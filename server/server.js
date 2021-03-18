const express = require('express')
const app = express()
const port = 3000
const db = require('./db/db-manager');

app.get('/', (req, res) => res.send('Server Working'))





app.listen(port, () => console.log(`Remember me app listening on port ${port}!`))