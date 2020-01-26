const path = require('path');

const merge = require('webpack-merge'); // 合并webpack配置
const config = require('./webpack.config.js');
const webpack = require('webpack');

const devConfig = {
  // 开发模式
  mode: 'development',

  // 输入路径
  output: {
    filename: 'index.[hash].js',
    path: path.resolve(__dirname, '../dist')
  },

  // 服务启动
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    hot: true,
    overlay: true,
    open: true,
    publicPath: '/',
    host: 'localhost',
    port: '1200'
  },

  // 插件
  plugins: [
    new webpack.HotModuleReplacementPlugin() // 替换插件
  ]
}

module.exports = merge(config, devConfig);