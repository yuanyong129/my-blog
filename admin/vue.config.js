module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title= '空澄的个人博客管理端'
        return args
      })
  }
}