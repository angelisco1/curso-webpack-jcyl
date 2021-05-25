const path = require('path');

const entryPath = path.join(__dirname, 'src');
const outputPath = path.join(__dirname, 'dist');

module.exports = {
  mode: 'development',
  entry: path.join(entryPath, 'app.ts'),
  output: {
    filename: 'bundle.js',
    path: path.join(outputPath, 'js')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      }
    ]
  },
  target: 'node',
  resolve: {
    extensions: ['.ts', '.js']
  }
}