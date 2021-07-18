import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "数据错误",
  data: {
    avatar: "https://raw.githubusercontent.com/chenzhongqing666/gitTest/main/avatar.png",
    siteTitle: "我的个人空间",
    github: "https://github.com/chenzhongqing666",
    qq: "1994267747",
    qqQrCode:
      "https://raw.githubusercontent.com/chenzhongqing666/gitTest/main/qq%E4%BA%8C%E7%BB%B4%E7%A0%81.jpg",
    weixin: "18103781621",
    weixinQrCode:
      "https://raw.githubusercontent.com/chenzhongqing666/gitTest/main/weixin.png",
    mail: "chenzhongqing0724@gmail.com",
    icp: "陈CZQ忠19980724庆",
    githubName: "chenzhongqing666",
    favicon: "https://raw.githubusercontent.com/chenzhongqing666/gitTest/main/avatar.png",
  },
});
