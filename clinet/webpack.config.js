const path = require('path');
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  //起点になるエントリポイント
  entry: './src/index.tsx',
  //buildするファイルの設定
  output: {
    filename: 'bundle.js',
    path: path.resolve(`${__dirname}/dist`),
  },
  module: {
    // css-loader->style-loader
    rules: [
      //typescriptのloader
      { test: /\.tsx$/, use: 'ts-loader' },
      //cssのloader 
      {
        test: /\.css/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
          }
        ]
      }
    ],
  },
  resolve: {
    extensions: [
      '.ts', '.js', '.tsx', '.jsx'
    ],
  },
  //webpack-dev-serverの設定
  devServer: {
    port: 3001,
    //localhost3001にアクセスした時に表示するviewの指定
    contentBase: __dirname,
    publicPath: '/',
    noInfo: false,
    historyApiFallback: true
  },
  devtool: "source-map"
  
};