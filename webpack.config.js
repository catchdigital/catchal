const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FractalWebpackPlugin = require('fractal-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    // docs: {
    //   import: path.join(__dirname, "src", "fractal.js"),
    // },
    app: {
      import: path.join(__dirname, "src", "index.js"),
      // dependOn: 'docs'
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
      mode: 'build', // mode: 'server'
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "dist", "index.html"),
    }),
  ],
  devServer: {
    server: 'https',
    liveReload: true,
    watchFiles: './src',
    static: [{
      directory: path.join(__dirname, 'dist'),
      serveIndex: true,
      watch: false,
    }]
  }
}
