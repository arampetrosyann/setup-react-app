const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new HTMLWebpackPlugin({
      template: "public/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(mjs|js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },

      {
        test: /\.html$/i,
        use: ["html-loader"],
      },

      {
        test: /\.s?css$/,
        exclude: /\.module\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { importLoaders: 2, sourceMap: true },
          },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },

      {
        test: /\.module\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              modules: {
                localIdentName: "[local]__[hash:base64:9]",
              },
              sourceMap: true,
            },
          },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },

      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[contenthash].[ext]",
            outputPath: "assets/images",
          },
        },
      },

      {
        test: /\.(woff(2)?|ttf|eot|svg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[hash].[name].[ext]",
            outputPath: "assets/fonts",
          },
        },
      },

      {
        test: /\.csv$/,
        use: ["csv-loader"],
      },
    ],
  },
};
