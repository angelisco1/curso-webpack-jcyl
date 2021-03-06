const path = require('path');

const entryPath = path.join(__dirname, 'src');
const outputPath = path.join(__dirname, 'dist');

module.exports = {
  mode: 'development',
  entry: path.join(entryPath, 'app.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(outputPath)
  },
  // watch: true,
  module: {
    rules: [
      // {
      //   test: /\.(js|css|scss|sass)$/,  // Tiene que ejecutarse el primero (hay que ponerlo abajo del todo)
      //   use: 'remove-comments-loader'
      // },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        // use: ['babel-loader', 'remove-comments-loader']
        // use: 'babel-loader',
        use: { loader: 'babel-loader' }
      },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
        // use: ['style-loader', 'css-loader', 'sass-loader', 'remove-comments-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // {
      //   test: /\.(js|css|scss|sass)$/,
      //   use: 'remove-comments-loader'
      // },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: outputPath,
    port: 3000,
    // open: 'Google Chrome'
    open: true
  }
}