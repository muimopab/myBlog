const rt = 'http://localhost:5050'

module.exports = {
  //配置彻底懒加载
  chainWebpack:config=>{
    config.plugins.delete("prefetch")
    //删除index.html开头的带有prefetch属性的link，不要异步下载暂时不需要的页面组件文件
  },
  //配置客户端http代理跨域请求
  devServer: {
    proxy: {
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      '/blog': {
        target: rt,//真实服务器地址
        changeOrigin: true, //是否跨域
        pathRewrite: {
          '^/blog' : '/blog' //将程序中的/api，替换为空字符串，再和target中的基础路径拼接起来作为发送到服务器的最终请求地址。
        }
      },
    //   '/user': {
    //     target: `http://localhost:5050`,//真实服务器地址
    //     changeOrigin: true, //是否跨域
    //     pathRewrite: {
    //       '^/user' : '' //将程序中的/api，替换为空字符串，再和target中的基础路径拼接起来作为发送到服务器的最终请求地址。
    //     }
    //   }
    }
  }
}