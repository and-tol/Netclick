const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.ts',
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    // publicPath: '/dist',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.ts', '.json'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        loader: 'babel-loader',
        exclude: '/node_modules',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true, config: { path: './postcss.config.js' } },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      hash: false,
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
  devServer: {
    overlay: true,
    contentBase: path.join(__dirname, 'dist'),
    // compress: true,
    port: 9000,
    // lazy: true,
    filename: 'script.js',
  },
};
