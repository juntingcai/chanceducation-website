// vue.config.js
const webpack = require('webpack')
module.exports = {
  publicPath:'./',
  
  configureWebpack: {
    
      externals:{
        
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'axios': 'axios',
        'element-ui': 'ELEMENT',
        
      }
    
  },
}