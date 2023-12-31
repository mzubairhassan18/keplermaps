// Copyright (c) 2023 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

// NOTE: To use this example standalone (e.g. outside of deck.gl repo)
// delete the local development overrides at the bottom of this file

// avoid destructuring for older Node version support
const resolve = require("path").resolve;
const join = require("path").join;
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const CONFIG = {
  // bundle app.js and everything it imports, recursively.
  entry: {
    app: resolve("./src/main.js"),
  },
  output: {
    path: resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html", // to import index.html file inside index.js
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        loader: "babel-loader",
        include: [join(__dirname, "src")],
        exclude: [/node_modules/],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "build/images/",
              publicPath: "build/images/",
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",

              outputPath: "fonts/",
            },
          },
        ],
      },
      {
        test: /\.csv$/,
        use: ["csv-loader"],
      },
    ],
  },

  node: {
    fs: "empty",
  },

  // to support browser history api and remove the '#' sign
  devServer: {
    historyApiFallback: true,
  },
  watch: false,

  // Optional: Enables reading mapbox and dropbox client token from environment variable
  plugins: [
    new webpack.EnvironmentPlugin({
      ["MapboxAccessToken"]:
        "pk.eyJ1IjoiaW5hbWtob3NhIiwiYSI6ImNsamJ1OWMyNTI1bG4zbHRleW1uZWxheHMifQ.xzzDY7gHT8rrIcY2PBqDMQ",
    }),
  ],
};

// This line enables bundling against src in this repo rather than installed kepler.gl module
module.exports = (env) => {
  return CONFIG;
};
