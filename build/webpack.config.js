const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  devServer: {
    watchContentBase: true,
    contentBase: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          compilerOptions: {
            compatConfig: {
              MODE: 3
            }
          }
        }
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              appendTsSuffixTo: [/\.vue$/],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".vue", ".json"],
    alias: {
      vue$: "vue/dist/vue.runtime.esm-bundler.js",
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyPlugin({
      patterns:[
        { from: "./public" },
      ],
    }),
  ],
};
