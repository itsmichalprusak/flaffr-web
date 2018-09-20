const path = require('path')

const config = {
  entry: ['./src/App.tsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'flaffr.bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'] // https://github.com/ahfarmer/minimal-react-starter/issues/4
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ }
      // TODO: Write rules and general support for SCSS
    ]
  }
}

module.exports = config