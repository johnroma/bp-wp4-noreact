const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: {
    index: "./src/index.js",
    page: "./src/javascript/page.js",
    script: "./src/javascript/script.js"
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: [/.scss$/],
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8000,
              name: "images/[name]-[hash].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/"
            }
          }
        ]
      },
      { test: [/.ico$/], loader: "file?name=[name].[ext]" }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      favicon: "./src/favicon.ico",
      template: "./src/index.html",
      inject: true,
      chunks: ["index", "page", "script"],
      filename: "./index.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/helloworld.html",
      inject: true,
      chunks: ["index"],
      filename: "./helloworld.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/theme_index.html",
      inject: true,
      chunks: ["index", "page", "script"],
      filename: "./theme_index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
}
