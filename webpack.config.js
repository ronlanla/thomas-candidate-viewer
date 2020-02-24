"use strict";

module.exports = {
  mode: 'production',
  entry: "./src/index.tsx",
  output: {
    filename: "build.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
};