const path = require('path');
// 为HTML文件引入外界资源，创建HTML入口文件...
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 帮助我们完成 每次打包前的文件清除工作
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 该插件将CSS提取到单独的文件中
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

  // 入口
  entry: './src/index.js',
  
  // 设置别名和其他配置
  resolve: {
    // alias（别名）
    alias: {
      '@src': path.resolve(__dirname, '../src/')
    },
    // 在导入语句没带文件后缀时，Webpack 会自动带上后缀后去尝试访问文件是否存在
    extensions: [".js", ".json"]
  },

  module: {
    rules: [
      // html文件
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      // js文件
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            cacheDirectory: true // 配置缓存提高编译性能
          }
        }],
        exclude: /(node_modules|bower_components)/,
      },
      // 样式文件
      {
        test: /\.(le|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              sourceMap: true,
              plugins: loader => [
                require('autoprefixer')()
              ]
            }
          },
          {
            loader: "less-loader",
            options: {
              sourceMap: true
            }
          },
        ]
      },
      // 图片文件
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        include: [path.resolve(__dirname, '../src/')],
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'img/', // 打包输出文件夹
            limit: 2048 // 如果小于 2kb，就会转为base64打包进JS，如果大于就打包到文件夹中，节省一次网络请求
          }
        }
      },
      // 字体文件
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        include: [path.resolve(__dirname, '../src/')],
        use: ['file-loader']
      }
    ]
  },

  // 插件
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    }),
    new HtmlWebpackPlugin({
      filename: "index.html", // 最终生成的文件名
      template: "./src/index.html",
      minify: { // 压缩选项
        collapseWhitespace: true, // 移除空格
        removeComments: true, // 移除注释
        removeAttributeQuotes: true, // 移除双引号
      }
    }),
    new CleanWebpackPlugin()
  ]

}
