const webpack = require('webpack')
const library = '[name]_lib'
const path = require('path')

module.exports = {
  entry: {
    vendors: [
      'react',
      'react-dom'
    ]
  },

  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, '../vendor'),
    library
  },

  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname, '../vendor/[name]-manifest.json'),
      // This must match the output.library option above
      name: library
    }),
  ],
}
