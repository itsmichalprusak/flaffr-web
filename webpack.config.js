const path = require('path')
const config = {
  entry: ['./src/App.tsx'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'flaffr-bundled.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', 'js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ }
    ]
  }
}

module.exports = config