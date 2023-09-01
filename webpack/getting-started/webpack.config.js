const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
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
    ],
  },
};
