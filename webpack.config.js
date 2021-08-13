const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "pages/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[chunkhash].js"
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [
          path.resolve(__dirname, "node_modules"),
          path.resolve(__dirname, "tools"),
          path.resolve(__dirname, "src/tests")
        ],
        use: [{ loader: "babel-loader" }]
      },
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
    test: /\.(jpg|png|svg)$/,
    loader: 'url-loader',
    options: {
      limit: 25000,
    },
},
{
    test: /\.(jpg|png|svg)$/,
    loader: 'file-loader',
    options: {
      name: '[path][name].[hash].[ext]',
    },
},
      // { test: /\.(png|jpg|svg)$/, loader: "url-loader?limit=8192" }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true
  },
};
