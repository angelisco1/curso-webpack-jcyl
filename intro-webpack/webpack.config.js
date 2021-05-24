const path = require('path');

const entryPath = path.join(__dirname, 'src');
const outputPath = path.join(__dirname, 'dist');

module.exports = {
  mode: 'development',
  entry: path.join(entryPath, 'app.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(outputPath, 'js')
  }
}