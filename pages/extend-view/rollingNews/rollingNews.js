Page({
  data: {
    newsList:[
      "想像你的想像，优壳让你更快搭建小程序",
      "格兰仕暗示拜访拼多多后遭天猫打压，拼多多高层赞其有勇气",
      "阿里计划将每股普通股拆为8股，增加筹资灵活性"
    ],
    hotSearch: [
      "夏季穿搭",
      "减脂冬瓜荷叶蛋",
      "玻尿酸补水面膜"
    ],
    animation:false
  },
  onLoad: function (options) {
    setTimeout(()=>{
      this.setData({
        animation:true
      })
    },600)
  },
  detail(e) {
    wx.showToast({
      title: '详情功能尚未完善~',
      icon: "none"
    })
  }
})