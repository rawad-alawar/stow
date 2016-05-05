const path = require('path')
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',

  entry: [
    'webpack-hot-middleware/client',
    './src/index.js'
  ],

  module: {
    loaders: [
      { test: /\.css$/,
        loader: 'style!css' },
      { test: /\.scss?$/,
        loader: 'style!css!sass' },
      { test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel' },
      { test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel' },
      { test: /\.png$/,
        loader: 'file' },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './public',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};