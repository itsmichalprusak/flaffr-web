const path = require('path')
const config = {
  entry: ['./src/app.tsx'], // TODO: Review the app startpoint
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'flaffr-bundled.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', 'js']
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
}

module.exports = config