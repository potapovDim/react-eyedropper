module.exports = {
  entry: './src/main.js',
  output: {
    path: './',
    filename: "index.js"
  },
  devServer: {
    port: 7070,
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
        }
      }
    ]
  }
}