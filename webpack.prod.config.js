const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'generateUUID.js',
    library: 'generateUUID',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          }, {
            loader: 'eslint-loader',
            options: { fix: true },
          },
        ],
      },
    ],
  },
}
