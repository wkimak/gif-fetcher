const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './client/src/index.jsx',
  output: {
    path: path.join(__dirname, '/client/dist'),
    filename: 'bundle.js'
  },
  optimization: {
    minimizer: [new UglifyJsPlugin({ test: /\.js[a-z]?(\?.*)?$/i})]
  },
  module: {
    rules: [
          {
            test: /\.(jsx|js)/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            }
          },
          {
            test: /\.(css|svg)$/,
            use: ['style-loader', 'css-loader']
          }
        ]
      },
  plugins: [
     new HtmlWebpackPlugin({
        template: './client/src/index.html'
      })
  ]
}