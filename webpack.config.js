var Webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'assets');
var mainPath = path.resolve(__dirname, 'src', 'index.js');
const StyleLintPlugin = require('stylelint-webpack-plugin');
var combineLoaders = require('webpack-combine-loaders');

var config = {

    // Makes sure errors in console map to the correct file
    // and line number
    devtool: 'eval',
    entry: [

        // For hot style updates
        'webpack/hot/dev-server',

        // The script refreshing the browser on none hot updates
        'webpack-dev-server/client?http://localhost:8080',

        // Our application
        mainPath],
    output: {

        // We need to give Webpack a path. It does not actually need it,
        // because files are kept in memory in webpack-dev-server, but an
        // error will occur if nothing is specified. We use the buildPath
        // as that points to where the files will eventually be bundled
        // in production
        path: buildPath,
        filename: 'bundle.js',

        // Everything related to Webpack should go through a build path,
        // localhost:3000/build. That makes proxying easier to handle
        publicPath: '/assets/'
    },
    eslint: {
        configFile: path.join(__dirname, '.eslintrc'),
        emitError: true
    },
    module: {
        preLoaders: [
            {
                test: /\.js?$/,
                loaders: ['eslint'],
                include: path.join(__dirname, 'src'),
                exclude: [nodeModulesPath]
            }
        ],
        loaders: [

            // I highly recommend using the babel-loader as it gives you
            // ES6/7 syntax and JSX transpiling out of the box
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: [nodeModulesPath]
            },

            // Let us also add the style-loader and css-loader, which you can
            // expand with less-loader etc.
            {
                test: /\.css$/,
                loader: combineLoaders([
                    {
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader',
                        query: {
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    }
                ]),
                exclude: [nodeModulesPath]
            }

        ]
    },

    // We have to manually add the Hot Replacement plugin when running
    // from Node
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
    ]
};

module.exports = config;