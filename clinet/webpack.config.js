const path = require('path');
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
    rules: [
      {
        test: /\.tsx$/,
        //loaderの指定 tsconfig.json→"jsx":"react"とセット
        use: [
          { loader: 'ts-loader' },
        ]
      },
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
  }
};