const { merge } = require('webpack-merge');
const path = require("path");
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

 module.exports = merge(common, {
   mode: 'production',
   plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })],
    module: {
        rules: [
          {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
          },
        ],
      },    
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
 });