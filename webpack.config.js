// In webpack.config.js
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'dist'),
};

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${PATHS.app}/index.html`,
  filename: 'index.html',
  inject: 'body',
});

const LAUNCH_COMMMAND = process.env.npm_lifecyle_event;
const isProduction = LAUNCH_COMMMAND === 'production';
process.env.BABEL_ENV = LAUNCH_COMMMAND;

const productionPlugin = new webpack.DefinePlugin({
  process_env: {
    NODE_ENV: JSON.stringify('production'),
  },
});

const base = {
  devtool: 'cheap-module-inline-source-map',
  entry: [
    'babel-polyfill',
    PATHS.app,
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
  output: {
    filename: 'index_bundle.js',
    path: PATHS.build,
  },
};

const developmentConfig = {
  devtool: 'cheap-module-inline-source-map',
  devServer: {
    contentBase: PATHS.build,
    hot: true,
    inline: true,
    progress: true,
  },
  plugins: [HTMLWebpackPluginConfig, new webpack.HotModuleReplacementPlugin()],
};

const productionConfig = {
  devtool: 'cheap-module-source-map',
  plugins: [HTMLWebpackPluginConfig,
    productionPlugin,
  ],
};

module.exports = Object.assign({}, base, isProduction ? developmentConfig : productionConfig);
