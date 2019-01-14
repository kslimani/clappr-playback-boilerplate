// Webpack configuration
const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const NotifierPlugin = require('webpack-build-notifier')

// Adjust naming to your needs
var pluginName = 'myplayback', pluginClass = 'MyPlayback'

var outputFile, plugins = [], optimization = {}

if (process.env.npm_lifecycle_event === 'build-min') {
  outputFile = pluginName + '.min.js'
  optimization.minimizer = [
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      uglifyOptions: {
        output: {
          comments: false,
        },
      }
    }),
  ]
} else {
  outputFile = pluginName + '.js'
  optimization.minimize = false
}

plugins.push(new NotifierPlugin({
  title: optimization.minimizer ? 'minified ' + pluginName : pluginName,
}))

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: outputFile,
    library: pluginClass,
    libraryTarget: 'umd',
  },
  optimization: optimization,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        },
        include: [
          path.resolve(__dirname, 'src')
        ],
      },
    ],
  },
  plugins: plugins,
  externals: {
   clappr: {
    amd: 'clappr',
    commonjs: 'clappr',
    commonjs2: 'clappr',
    root: 'Clappr'
   }
  },
  devServer: {
    contentBase: [
      path.resolve(__dirname, "public"),
    ],
    // publicPath: '/js/',
    disableHostCheck: true, // https://github.com/webpack/webpack-dev-server/issues/882
    compress: true,
    host: "0.0.0.0",
    port: 8080
  }
}
