const path = require('path');

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].js',
    assetModuleFilename: path.join('assets', '[name][ext]')
  },
  watch: true
}