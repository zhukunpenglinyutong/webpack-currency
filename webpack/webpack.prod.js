const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 压缩CSS文件
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// 压缩JS文件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const merge = require('webpack-merge'); // 合并webpack配置
const config = require('./webpack.config.js');

const prodConfig = {
  // 生产模式
  mode: 'production',

  // 输入路径
  output: {
    filename: 'index.[hash].js',
    path: path.resolve(__dirname, '../dist')
  },
  
  // 插件
  plugins: [
    new OptimizeCssAssetsPlugin({}),
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: true
    })
  ]
}
module.exports = merge(config, prodConfig);