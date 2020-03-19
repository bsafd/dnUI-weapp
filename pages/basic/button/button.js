Page({
  data: {
  },
  onLoad: function (options) {

  },
  getUserInfo: function (e) {
    wx.showToast({
      title: "获取用户信息成功！",
      icon: 'none',
      duration: 2000
    });
    console.log("getUserInfo: ", e)
  },
  getPhoneNumber: function (e) {
    wx.showToast({
      title: "获取用户手机号成功！",
      icon: 'none',
      duration: 2000
    });
    console.log("getPhoneNumber: ", e)
  },
  detail: function () {
    wx.showToast({
      title: '只有组件才有的点击事件~',
      icon: "none"
    })
  }
})