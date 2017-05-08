var path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '')
  },
  devServer: {
    contentBase: path.join(__dirname, ""),
    compress: true,
    port: 9000,
    watchContentBase: true
  }
};
