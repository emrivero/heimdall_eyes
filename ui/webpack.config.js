const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './main.js',
  output: {
    filename: '[name].js',
  },
  resolve: {
    alias: {
      lib: './lib',
    },
    extensions: ['.wasm', '.mjs', '.js', '.json', '.css', '.hbs', '.html', '.jpg'],
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules\/(?!ol)|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        // exclude: [/node_modules/],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|jpg)$/,
        exclude: /node_modules/,
        loader: 'url-loader?name=fonts/[name].[ext]',
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    hot: true,
    open: true,
    openPage: `./index.html`,
    watchOptions: {
      poll: 1000,
    },
  },
  devtool: 'eval-source-map',
};
