const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname , 'build'),
    publicPath: '/build/',
    filename: 'app.js'     
  },
  devServer: {
    static: {      
      directory: path.resolve(__dirname, './'),
    },
    compress: true,
    port: 9000,
  },
};