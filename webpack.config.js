var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

process.env.NODE_ENV = 'production';

module.exports = {
  entry: [
    './src/index.jsx'
  ],
  module: {
    loaders: [
      {
       test: /\.jsx?$/,
       exclude: /node_modules/,
       loaders: ['babel']
     },
     { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=' + (process.env.NODE_ENV !== 'production' ? '[name]__[local]___[hash:base64:7]' : '[hash:base64:7]') + '!postcss-loader!stylus-loader') },
     { test: /\.png$/, loader: "url-loader?limit=100000" },
     { test: /\.jpg$/, loader: "file-loader" }
   ]
  },
  postcss: [
    require('autoprefixer'),
    require('postcss-color-rebeccapurple')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules']
  },
  output: {
    path: __dirname + '/dist',
     publicPath: '/',
     filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("[name].css"),
    new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        sourceMap: false,
        compress: {
            drop_console: true
        },
        mangle: {
            except: ['$super', '$', 'exports', 'require', '$q', '$ocLazyLoad']
        }
    })
  ]
};