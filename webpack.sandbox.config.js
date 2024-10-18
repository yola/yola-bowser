const path = require('path');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  mode,
  devServer: {
    static: {
      directory: path.join(__dirname, 'sandbox'),
    },
    watchFiles: ['sandbox/**/*'],
    compress: true,
    open: true,
    hot: true,
    port: 9000
  },
  context: path.resolve(__dirname),
  entry: ['./sandbox/index.js'],
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'sandbox/dist'),
    publicPath: '/dist/',
    filename: 'index.js',
  },
  resolve: {
    alias: {
      'yola-bowser': path.resolve(__dirname, 'src/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'sandbox'),
        ],
        use: 'babel-loader',
      },
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre',
      },
    ],
  }
};
