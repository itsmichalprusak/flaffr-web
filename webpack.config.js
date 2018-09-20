const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: ['./src/App.tsx'],
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Flaffr.com' // The title that will be included in outputted HTML file.
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[contenthash].bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'] // https://github.com/ahfarmer/minimal-react-starter/issues/4
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ }
      // TODO: Write rules and general support for SCSS
    ]
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
}

module.exports = config