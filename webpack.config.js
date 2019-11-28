const path = require('path');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  mode,
  context: path.resolve(__dirname, 'src'),
  entry: ['./index.js'],
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryExport: 'default',
    libraryTarget: 'commonjs',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src')],
        use: ['babel-loader'],
      },
    ],
  },
};
