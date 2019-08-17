const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongoUri = 'mongodb://127.0.0.1:27017/light-tech-test-dev';

mongoose.Promise = global.Promise;
mongoose.connect(mongoUri, { useNewUrlParser: true });

const app = express();
app.use(bodyParser.json());

require('./routes/routes')(app);

module.exports = app;