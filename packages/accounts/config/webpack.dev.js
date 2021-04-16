const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const port = 8084;
const devConfig = {
  mode: "development",
  output: {
    publicPath: `http://localhost:${port}/`,
  },
  devServer: {
    port: port,
    historyApiFallback: {
      index: "/index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "accounts",
      filename: "remoteEntry.js",
      exposes: {
        "./AccountsApp": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
