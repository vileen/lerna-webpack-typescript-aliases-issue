const path = require('path');
const webpack = require('webpack');

module.exports = {
  devServer: {
    disableHostCheck: true,
    historyApiFallback: true,
    https: false,
    hot: true,
    inline: true,
    stats: 'errors-only',
    overlay: {
      warnings: true,
      errors: true,
    },
    hotOnly: false,
    port: 3000,
    watchOptions: {
      aggregateTimeout: 1000,
    },
  },

  entry: {
    app: ['./src/index'],
  },

  // had to extract it all from react-build-configs to add rootMode option
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          // This is a feature of `babel-loader` for webpack (not Babel itself).
          // It enables caching results in ./node_modules/.cache/babel-loader/
          // directory for faster rebuilds.
          cacheDirectory: true,
          rootMode: 'upward',
        },
        test: /\.(js|ts)x?$/,
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        loader: require.resolve('file-loader'),
        options: {
          outputPath: 'assets/',
        },
        test: /\.(eot|ttf|woff|woff2|svg|png|gif|jpe?g)$/,
      },
    ],
  },

  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, 'target'),
  },

  plugins: [
    // enabled HMR
    new webpack.HotModuleReplacementPlugin(),

    // skip the emitting phase whenever there are errors while compiling
    new webpack.NoEmitOnErrorsPlugin(),
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
};
