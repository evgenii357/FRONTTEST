const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const Product = require('./db/Product');

import mongoose from './db/db';

import indexRoutes from './routes/index';
import apiRoutes from './routes/api';

initializeServer();

function initializeServer(){
    const app = express();
    const port = process.env.NODE_ENV === 'production' ? process.env.PORT : 8080;

    //Server configuration
    if(process.env.NODE_ENV === 'production'){
        //do nothing
    }
    else{
        const webpack = require('webpack');
        const config = require(path.join(__dirname, '../../webpack.config'));
        const compiler = webpack(config);

        app
            .use(require('webpack-dev-middleware')(compiler, {
                publicPath: config.output.publicPath,
                noInfo: true
            }))
            .use(require('webpack-hot-middleware')(compiler));
    }

    app
        .use(bodyParser.json())
        .use(bodyParser.urlencoded({extended: true}))
        .use(morgan('dev'));

    app
        .use('/', indexRoutes)
        .use('/api', apiRoutes);

    app
        .use('/assets', express.static(path.join(__dirname, '../../dist/client')))
        .use('/public', express.static(path.join(__dirname, '../../public')));

    app.listen(port, () => {
        console.log(`Server listening port ${port}`);

        Product.generateProducts();
    });
}