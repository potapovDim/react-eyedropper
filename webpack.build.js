module.exports = {
  entry: './src/app/eye-dropper.js',
  output: {
    path: './',
    filename: "index.js"
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