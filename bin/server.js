'use strict';

const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('../webpack.config.js');
const path = require('path');

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.CLIENT_PORT || 9000;

// config.entry = [];
// config.entry.unshift(`webpack-dev-server/client?http://${HOST}:${PORT}/`, 'webpack/hot/only-dev-server');
// config.entry.push(path.resolve(__dirname, '..', 'src', 'index.js'));

const compiler = webpack(config);

const CONTENT_BASE = path.resolve(__dirname, '..');
console.log(CONTENT_BASE);

new WebpackDevServer(compiler, {
    contentBase: CONTENT_BASE,
    hot: true,
    historyApiFallback: true,
    stats: 'errors-only'
}).listen(PORT, HOST, (err) => {
   if (err) {
       console.error(err);
   }
   console.log(`Server listening at http://${HOST}:${PORT}`);
});