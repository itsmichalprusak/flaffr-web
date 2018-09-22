const path = require('path')

const config = {
  entry: ['./src/App.tsx'],
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
      /*
       * Style loader creates style nodes from JS strings,
       * CSS loader translates CSS into CommonJS
       * and Sass loader compiles Sass to CSS, using Node Sass
       */
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
    ]
  }
}

module.exports = config
