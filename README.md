### webpack基础配置

<p align="center">
  <img width="150" src="https://itzkp-1253302184.cos.ap-beijing.myqcloud.com/github%E5%9B%BE%E7%89%87/notes/3.png" alt="Vue logo">
</p>

<p align="center">
  <a href="javascript:;"><img src="https://img.shields.io/github/license/zhukunpenglinyutong/notes.svg" alt="朱昆鹏 MIT">
  </a>
</p>

---


### 使用

```sh
# 下载
npm install 

# 预览
npm run dev

# 编译打包
npm run build
```

---

### 项目文件夹介绍

- src 大家书写正常代码的地方
- webpack 打包配置文件
  - webpack.config.js 通用配置文件
  - webpack.dev.js 开发使用使用的配置文件
  - webpack.prod.js 打包上线使用的配置文件

---

### 基础功能介绍

- [x] HTML
  - [x] 支持HTML自动注入功能
  - [x] 打包支持HTML压缩功能
- [x] CSS
  - [x] 支持基础的css引入使用
  - [x] 自动添加厂商后缀
  - [x] 支持less
  - [ ] scss | sass 暂时没写上
  - [x] 打包支持CSS压缩功能
- [x] JS
  - [x] 支持JS语言
  - [x] 打包支持JS压缩功能
- [x] 其他
  - [x] 支持预览功能
  - [x] 支持小图片转base64功能

---

### 后记

这是一个供自己使用的基础webpack配置，如果有需要，大家可以clone下来自己改一下，弄成自己的，自己维护一个自己的还是比较方便的

我也会不断的进行更新的，计划优化基础webpack打包，和 添加 Vue打包，react打包，ssr打包