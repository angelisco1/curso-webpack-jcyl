const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');

module.exports = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    assetModuleFilename: path.join('assets', '[name].[hash][ext]')
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: path.join('styles', 'styles.[contenthash].css')
    }),
    new ImageminPlugin({
      test: /\.jpg$/,
      plugins: [
        imageminMozjpeg({
          quality: 50
        })
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader', 'postcss-loader']
        use: [MiniCSSExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
    ]
  }
}