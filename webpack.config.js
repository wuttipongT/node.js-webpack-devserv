'use strict';
var webpack = require('webpack');
const HtmlWebpackPlugin =  require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin'); 
var config = {
  context: __dirname + '/src', // `__dirname` is root of project and `src` is source
  entry: [
  	'webpack/hot/dev-server',
  	'webpack-dev-server/client?http://localhost:8080/',
  	'./app.js'
  ],
  output: {
    path: __dirname + '/src/assets', // `dist` is the destination
    filename: 'bundle.js',
  },
  devServer: {
  	open: true, // to open the local server in browser
  	contentBase: __dirname + '/src',
  },
  plugins:[
  	new webpack.HotModuleReplacementPlugin(),
  	new webpack.NoErrorsPlugin(),
  	 new CleanWebpackPlugin(['/src/assets'], {
      root: __dirname,
      verbose: true,
      dry: false
    }),
  	new HtmlWebpackPlugin({
        template: './index.html'
    })
  ]
};

module.exports = config;

// {
//     app: './app.js',
//   }
// --content-base src/ --hot
//stack https://stackoverflow.com/questions/37200774/index-html-using-webpack-dev-server-not-reload