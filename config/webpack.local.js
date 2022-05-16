const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    open: false,
    hot: true,
    compress: true,
    port: 8080,
    historyApiFallback: true,
    liveReload: true,
    // host: 'peter.test',
  },
  output: { filename: '[name].[contenthash].js', publicPath: '/' },
});
