module.exports = {//export default es6
  devServer : {
      proxy : {
          '/api' : {
              target : 'http://39.97.33.178',
              changeOrigin : true  //是否改变地址
          }
      }
  }
}