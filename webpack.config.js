const path = require('path');

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  module: {
    rules: [
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            exclude: /node_modules/,
        },
        {
            test: /\.m?js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  output: {
    filename: 'cineweb.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production'
};