const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  output: {
    publicPath: "auto",
    path: path.resolve(__dirname, "..", "docs"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(scss|sass)$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require.resolve("sass"),
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack", "url-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|ico)$/,
        exclude: /node_modules/,
        use: ["file-loader?name=[name].[ext]"],
      },
    ],
  },
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
      manifest: "./public/manifest.json",
      filename: "index.html",
      inject: "body",
    }),
    new webpack.DefinePlugin({
      "process.env.PRODUCTION": true,
      "process.env.NAME": JSON.stringify(require("./package.json").name),
      "process.env.VERSION": JSON.stringify(require("./package.json").version),
    }),
    new CopyPlugin({
      patterns: [{ from: "!(index.html)", context: "./public" }],
    }),
  ],
};
