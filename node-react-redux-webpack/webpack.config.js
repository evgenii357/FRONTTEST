'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: [
            'webpack-hot-middleware/client',
            './src/client/index'
        ]
    },
    
    output: {
        path: path.join(__dirname, 'dist/client'),
        filename: '[name].bundle.js'
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    watch: true,

    devtool: 'eval-source-map',

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ],

    externals: {
        jquery: '$'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude:/(node_modules|bower_components)/,
                include: path.join(__dirname, 'src/client')
            },
            {
                test: /\.(css|scss$)/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.json$/,
                use: ["json-loader"]
            },
            {
                test: /.*\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader?hash=sha512&digest=hex&name=images/[hash].[ext]',
                    'image-webpack-loader?{ optipng: {optimizationLevel: 7}, gifsicle: {interlaced: false}, pngquant:{quality: "65-90", speed: 4}, mozjpeg: {quality: 65}}'
                ]
            }
        ]
      }
}