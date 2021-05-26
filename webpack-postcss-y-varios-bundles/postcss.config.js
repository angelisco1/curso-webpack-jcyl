const autoprefixer = require('autoprefixer')
const colorblind = require('postcss-colorblind')

module.exports = {
  plugins: [
    autoprefixer,
    colorblind({
      method: 'protanopia'
    })
  ]
}