'use strict';
const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const routesIndex = require('./routes/routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', routesIndex.routes);

app.listen(config.port, () => {
  console.log('app listening on url http://localhost:' + config.port);
});

//sudo lsof -i :8080
////kill -9 PID
