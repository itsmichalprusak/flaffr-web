const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

const config = {
  entry: ['./src/App.tsx', './src/styles/test.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'flaffr.bundle.js'
  },
  devServer: {
    hot: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'] // https://github.com/ahfarmer/minimal-react-starter/issues/4
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('./flaffr.bundle.css') // https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/701
  ]
}

module.exports = config
