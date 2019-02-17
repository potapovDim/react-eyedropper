module.exports = {
  entry: './src/main.js',
  output: {
    path: '/',
    filename: "index.js"
  },
  devServer: {
    port: 7070,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
        }
      }
    ]
  }
}