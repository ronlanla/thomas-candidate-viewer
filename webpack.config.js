"use strict";

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: "./src/index.tsx",
  output: {
    filename: "build.js"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        test: /\.css?$/,
        use: [
          'style-loader', 
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
      },
      { // Handle font file loading
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
      { // Handle other media loading
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      // {
      //   test: /\.s[ac]ss$/i,
      //   use: [
      //     'style-loader', 
      //     'css-modules-typescript-loader',
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         modules: true
      //       }
      //     },
      //     'css-loader',
      //     'sass-loader'
      //   ],
      // },
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css"]
    // extensions: [".ts", ".tsx", ".js", ".scss", ".css"]
  }
};