const {
  override,
  addWebpackAlias
} = require('customize-cra')

const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  webpack: override(
    addWebpackAlias({
      '@': resolve('src'),
    }),
    config => {
      config.output.library = 'reactApp'
      config.output.libraryTarget = 'umd'
      // config.output.publicPath = 'http://localhost:4000/'
      return config
    }
  )
}

//  webpack: (config) => {
//     config.output.library = 'reactApp'
//     config.output.libraryTarget = 'umd'
//     // config.output.publicPath = 'http://localhost:4000/'
//     return config
//   }

// devServer: (configFunction) => {
//     return (proxy, allowedHost) => {
//       console.log('config-over', proxy, allowedHost)
//       const config = configFunction(proxy, allowedHost)
//       config.port = '3050'
//       config.headers = {
//         'Access-Control-Allow-Origin' : '*'
//       }
//       return config
//     }
//   }