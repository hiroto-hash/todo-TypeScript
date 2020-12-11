const path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(`${__dirname}/dist`),
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: [
          { loader: 'ts-loader' },
					//or ts-loader
        ]
      },
    ],
  },
  resolve: {
    extensions: [
      '.ts', '.js', '.tsx', '.jsx'
    ],
  }
};