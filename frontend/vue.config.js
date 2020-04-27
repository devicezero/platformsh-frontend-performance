module.exports = {
  devServer: {
    disableHostCheck: true
  },
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false
    }
  },
  configureWebpack: {
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 200000
      }
    },
    performance: {
      hints: "warning",
      maxEntrypointSize: 100000,
      maxAssetSize: 100000
    }
  }
};
