module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title= 'vue&element-ui管理端模板'
        return args
      })
  }
}