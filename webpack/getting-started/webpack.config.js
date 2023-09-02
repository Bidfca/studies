const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    // Determines the naming and location of assets in the output bundle.
    assetModuleFilename: "images/[hash][ext]",
    // Ensures that the "dist" directory is cleaned.
    clean: true,
  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            // Enable CSS modules to encapsulate styles.
            options: { modules: true },
          },
        ],
        // Loaders are executed from right to left.
        // use: ["style-loader", "css-loader"],
      },
      { test: /.(png|jpeg|gif|svg)$/, type: "asset/resource" },
      { test: /.(ttf|woff|woff2)$/, type: "asset/resource" },
    ],
  },
};
