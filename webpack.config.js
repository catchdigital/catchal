const path = require('path');
const FractalWebpackPlugin = require('fractal-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: {
      import: path.join(__dirname, "src", "index.js"),
    }
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }
    ]
  },
  plugins: [
    new FractalWebpackPlugin({
      mode: 'build',
    })
  ],
  devServer: {
    server: 'spdy',
    hot: true,
    liveReload: true,
    watchFiles: './src',
    static: [{
      directory: path.join(__dirname, 'build'),
      serveIndex: true,
      watch: false,
    }]
  }
}
