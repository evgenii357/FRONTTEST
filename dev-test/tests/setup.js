require('../database/models/product');

const mongoose = require('mongoose');
const mongoURI = 'mongodb://127.0.0.1:27017/light-tech-test-dev';

mongoose.Promise = global.Promise;
mongoose.connect(mongoURI, { useNewUrlParser: true });

