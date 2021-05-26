const path = require('path');

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].js',
    assetModuleFilename: path.join('assets', '[name][ext]')
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  }
}