// vue-cli的配置文件
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://www.zhihu.com",
      },
      // "/api":{
      //   target:"",
      // }
    },
  },
};
