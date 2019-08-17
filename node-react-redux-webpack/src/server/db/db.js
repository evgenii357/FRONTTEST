const mongoose = require('mongoose');
let db_url = 'mongodb://localhost/boilerplate-data-base';

mongoose.Promise = require('bluebird');
mongoose.connect(db_url);

mongoose.connection.on('error', console.error.bind(console, 'connection error'));
mongoose.connection.on('connected', () => {
    console.log(`Mongoose default connection open to ${db_url}`);
});

module.export = mongoose;