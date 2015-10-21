var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

var config = require('./webpack.config.base.js')


// Add HotModuleReplacementPlugin and BundleTracker plugins
config.plugins = config.plugins.concat([
  new webpack.NoErrorsPlugin(),
  new BundleTracker({filename: './webpack-stats.json'}),
])

module.exports = config