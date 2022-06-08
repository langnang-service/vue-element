module.exports = {
  // 基本路径
  publicPath: process.env.NODE_ENV === "production" ? "/?/vue-element/" : "/",
  // 构建时的输入目录
  outputDir: "dist",
  // 配置 webpack-dev-server 行为
  devServer: {
    hot: true,
    // 设置是否自动打开浏览器
    open: true,
    host: "0.0.0.0",
    proxy: {
      "/api": {
        target: 'http://localhost:9090',
        changeOrigin: true,
        pathRewrite: {
          "^/api": "http://localhost:9090/?/api"
        }
      }
    }
  },
  // 接收一个基于 webpack-chain 的 ChainableConfig 实例。
  // 允许对内部的 webpack 配置进行更细粒度的修改。
  chainWebpack: function (config) {
    config.plugin("html").tap(function (args) {
      args[0].title = "Vue Element - Langnang Service"; // 自定义标题
      return args;
    });
  }
};
