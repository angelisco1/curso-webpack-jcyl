const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');
const { merge } = require('webpack-merge');
const devConfig = require('./webpack.dev')
const prodConfig = require('./webpack.prod')


const entryPath = path.join(__dirname, 'src');
const outputPath = path.join(__dirname, 'dist');

const configuracionComun = {
  entry: {
    app: path.join(entryPath, 'app.js'),
    libreria: path.join(entryPath, 'libreria.js'),
  },
  output: {
    path: path.join(outputPath),
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(entryPath, 'public', 'index.ejs'),
      title: 'Ejemplo de extraer HTML, PostCSS...',
      meta: {
        description: 'Una página generada con un plugin de Webpack'
      }
    }),
    new CleanWebpackPlugin(),
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
      {
        test: /\.jpg$/,
        // type: 'asset/resource',
        // type: 'asset/inline',
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 5 * 1024
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: outputPath
  }
}


module.exports = (env) => {
  console.log(env);
  switch(env.mode) {
    case 'dev':
      return merge(configuracionComun, devConfig);
  }
}