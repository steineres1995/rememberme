const express = require('express');
const config = require('./src/config/config');
const cors = require('cors'); 
const app = express();

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // For legacy browser support
}
app.use(cors(corsOptions));

const port = config.default.port; 
var taskRoute = require('./src/routes/task');

app.use(express.json());
app.use('/tasks',taskRoute);

app.get('/', (req, res) => res.send('Server Working'))

app.listen(port, () => console.log(`Remember me app listening on port ${port}!`))