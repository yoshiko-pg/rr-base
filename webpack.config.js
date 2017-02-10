/* flow */
const AsyncAwaitPlugin = require('webpack-async-await');

module.exports = {
  entry: './src/main.jsx',
  output: {
    path: 'public',
    filename: 'bundle.js',
  },
  plugins: [
    new AsyncAwaitPlugin({}),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
