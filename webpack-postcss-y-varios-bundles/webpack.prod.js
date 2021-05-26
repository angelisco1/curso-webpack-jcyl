const path = require('path');

module.exports = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    assetModuleFilename: path.join('assets', '[name].[hash][ext]')
  },
}