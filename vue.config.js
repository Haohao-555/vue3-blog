const webpack = require('webpack')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      }),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 5,
        minChunkSize: 100
      })
    ]
  },
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.plugins.delete('prefetch')
  },
  devServer: {
    proxy: {
      '/vue3-blogapi': {
        target: 'http://localhost:4000/',
        changeOrigin: true // 是否跨域
      }
    }
  }
  // publicPath: '/vue3-blog/'
}
