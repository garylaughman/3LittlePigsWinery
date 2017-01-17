// var webpack = require('webpack');
// var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
// var env = process.env.WEBPACK_ENV || 'dev';
// var WebpackDevServer = require('webpack-dev-server');
// var path = require('path');
//
// var appName = 'app';
// var host = '0.0.0.0';
// var port = '9000';
//
// var plugins = [], outputFile;
//
// if (env === 'build') {
//   plugins.push(new UglifyJsPlugin({ minimize: true }));
//   outputFile = appName + '.min.js';
// } else {
//   outputFile = appName + '.js';
// }
//
// var config = {
//   entry: './src/index.js',
//   devtool: 'source-map',
//   output: {
//     path: __dirname + '/lib',
//     filename: outputFile,
//     publicPath: __dirname + '/example'
//   },
//   module: {
//     loaders: [
//       {
//         test: /(\.jsx|\.js)$/,
//         loader: 'babel',
//         exclude: /(node_modules|bower_components)/,
//         query: {
//           presets: ['react', 'es2015']
//         }
//       },
//       {
//         test: /(\.jsx|\.js)$/,
//         loader: "eslint-loader",
//         exclude: /node_modules/
//       }
//     ]
//   },
//   resolve: {
//     root: path.resolve('./src'),
//     extensions: ['', '.js', '.jsx']
//   },
//   plugins: plugins
// };
//
// if (env === 'dev') {
//   new WebpackDevServer(webpack(config), {
//     contentBase: './example',
//     hot: true,
//     debug: true
//   }).listen(port, host, function (err, result) {
//     if (err) {
//       console.log(err);
//     }
//   });
//   console.log('-------------------------');
//   console.log('Local web server runs at http://' + host + ':' + port);
//   console.log('-------------------------');
// }
//
// module.exports = config;

'use strict';

const webpack = require('webpack');
const path = require('path');

const env = process.env.NODE_ENV || 'development';
const isProd = env === 'production';

// const includedModules = [
//     resolve(process.cwd(), 'src'),
//     resolve(process.cwd(), '.storybook')
// ];

// const htmlWebpackPluginDefaultConfig = {
//     // template: "", //todo
//     mobile: true,
//     appMountId: 'root',
//     inject: false,
//     meta: { version: process.env.BUILD_BUMBER || 'Build Number is undefined' },
//     title: ''
// };

const NODE_MODULES_PATH = path.resolve(__dirname, 'node_modules');
const BUILD_PATH = path.resolve(__dirname, 'build');
const MAIN_PATH = path.resolve(__dirname, 'src', 'index.js');

var config = {
    entry: [
        // For hot style updates
        'webpack/hot/dev-server',

        // The script refreshing the browser on none hot updates
        'webpack-dev-server/client?http://localhost:9000',

        // Our application
        MAIN_PATH
    ],
    output: {
        // We need to give Webpack a path. It does not actually need it,
        // because files are kept in memory in webpack-dev-server, but an
        // error will occur if nothing is specified. We use the buildPath
        // as that points to where the files will eventually be bundled
        // in production
        path: BUILD_PATH,
        filename: "bundle.js",

        // Everything related to Webpack should go through a build path,
        // localhost:3000/build. That makes proxying easier to handle
        publicPath: '/build/'
    },
    // resolve: {
    //     extensions: ['', '.js', '.jsx'],
    //     root: path.resolve('./src')
    // },
    module: {
      loaders: [
          {
              test: /(\.jsx|\.js)$/,
              loader : 'babel',
              exclude : NODE_MODULES_PATH,
          }
          // {
          //       test: /(\.jsx|\.js)$/,
          //       loader: 'babel',
          //       exclude: /(node_modules|bower_components)/,
          //       query: {
          //         presets: ['react', 'es2015']
          //       }
          // }
          // {
          //     test: /\.(js|jsx)$/,
          //     loader: 'babel',
          //     exclude: [],
          //     // include: includedModules
          //     include: [
          //         resolve(__dirname, "src")
          //         // resolve(__dirname, "test")
          //     ],
          //     query: {
          //         presets: ['react', 'es2015']
          //   }
          // },
          // {
          //     test: /\.css$/,
          //     loader: 'style!css!postcss',
          //     // include: includedModules
          //     include: [
          //         resolve(__dirname, "src")
          //         // resolve(__dirname, "test")
          //     ]
          // }
      ]
    },
    plugins: [ new webpack.HotModuleReplacementPlugin() ],
    // postcss(webpack) {
    //   return [
    //       require('postcss-import')({ addDependencyTo: webpack }),
    //       require('postcss-url')(),
    //       require('postcss-cssnext')(),
    //       require('postcss-browser-reporter')(),
    //       require('postcss-reporter')(),
    //   ];
    // }
};

// if (!isProd) {
//     config.plugins.push(new webpack.HotModuleReplacementPlugin());
// }

// config.plugins[0].options.baseHref = '/gary/';
// config.plugins[0].options.baseCss = true;

module.exports = config;