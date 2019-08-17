'use strict'

const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: [
            './src/client/App'
        ]
    },
    
    output: {
        path: path.join(__dirname, 'dist/client'),
        filename: '[name].bundle.js'
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin({
            filename: '[name].css',
            disable: false,
            allChunks: true
        }),
        new CleanWebpackPlugin(['dist'], {
            root: __dirname,
            verbose: true,
            dry: false
        }),
        new webpack.optimize.ModuleConcatenationPlugin()
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
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })
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