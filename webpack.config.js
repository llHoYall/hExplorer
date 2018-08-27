const webpack = require("webpack");
const path = require("path");

const externalPlugins = new webpack.ExternalsPlugin("commonjs", [
  "app",
  "auto-updater",
  "browser-window",
  "content-tracing",
  "dialog",
  "electron",
  "global-shortcut",
  "ipc",
  "menu",
  "menu-item",
  "power-monitor",
  "protocol",
  "tray",
  "remote",
  "web-frame",
  "clipboard",
  "crash-reporter",
  "screen",
  "shell"
]);

module.exports = {
  mode: "development",
  entry: "./src/app.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    contentBase: "./dist"
  },
  devtool: "cheap-module-eval-source-map",
  plugins: [externalPlugins]
};
