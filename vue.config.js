//vue.config.js
const data = require('./static/mock/index.json')
const citydata = require('./static/mock/city.json')
const path = require('path');

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/', // 根路径
  outputDir: 'dist', // 构建输出目录
  assetsDir: 'assets', // 静态资源目录(js,css,img,fonts)
  lintOnSave: false, // 是否开启eslint保存检测,有效值（true||false||error)
  chainWebpack: (config)=>{
    config.resolve.alias
        .set('@', resolve('src'))
        .set('common',resolve('src/common'))
  },
  devServer: {
    open: false, // 有效值（true||false) npm run serve后,是否打开浏览器
    host: 'localhost', // 配置端口号
    port: 8080,
    https: false, // 有效值(true||false)
    hotOnly: false, // 热更新
    proxy: {
      // 配置跨域
      '/api': {
        target: 'http://localhost:8080',
        ws: true, // 是否跨域
        changeOrigin: true,
        // 重写地址
        pathRewrite: {
          '^/api': '/static/mock'
        }
      }
    },
    // 在服务内部的所有其他中间件之前， 提供执行自定义中间件的功能。 这可以用来配置自定义处理程序
    before: app => {
      console.log(app)
      //   加载本地数据
      app.get('/api/index.json', (req, res) => {
        res.json(data)
      })
      app.get('/api/city.json', (req, res) => {
        res.json(citydata)
      })
      // 在浏览器输入localhost:8080/api/data就可以拿到数据了
    }
  }
}
