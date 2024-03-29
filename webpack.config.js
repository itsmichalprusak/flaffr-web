const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const path = require('path')

const config = {
  mode: 'production',
  devtool: 'source-map',
  entry: ['./src/App.tsx', './src/styles/main.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'flaffr-[name].bundle.js'
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
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCssAssetsPlugin({})
    ],
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
