var Webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'assets');
var mainPath = path.resolve(__dirname, 'src', 'index.js');
var combineLoaders = require('webpack-combine-loaders');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {

    // We change to normal source mapping
    devtool: 'source-map',
    entry: mainPath,
    output: {
        path: buildPath,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: [nodeModulesPath]
        },{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract(
                combineLoaders([{
                    loader: 'css-loader',
                    query: {
                        modules: true,
                        localIdentName: '[name]__[local]___[hash:base64:5]'
                    }
                }])
            )
        }]
    },
    plugins: [
        new ExtractTextPlugin('styles-[hash].css'),
    ]
};

module.exports = config;