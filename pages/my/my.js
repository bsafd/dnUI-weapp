let globalData = getApp().globalData;
const util = require('../../utils/util.js')
Page({
  data: {
    zansan: false,
    zansanbutton: [{
      text: "没银子",
      type: 'light'
    }],
    memberName: 'UOOKK', //昵称
    isLogin: false
  },
  onLoad: function(options) {},
  onShow: function() {
    let isLogin = globalData.isLogin;
    if (isLogin) {
      this.setData({
        isLogin: isLogin,
        memberName: util.formatNum(wx.getStorageSync("uookk_mobile") || 'UOOKK')
      });
    }
  },
  logout: function() {
    wx.showModal({
      title: '提示',
      content: '确定退出登录？',
      confirmColor: '#5677FC',
      success: (res) => {
        if (res.confirm) {
          wx.clearStorage()
          wx.reLaunch({
            url: '../login/login'
          })
        }
      }
    });
  },
  edit() {
    wx.showToast({
      title: '功能开发中~',
      icon: "none"
    })
  },
  tapEvent: function(e) {
    let index = e.currentTarget.dataset.index;
    let url = "";
    if (index == 1) {
      url = '../about/about'
    } else if (index == 2) {
      let key = e.currentTarget.dataset.key;
      url = '../maps/maps?key=' + key
    } else {
      url = '../log/log'
    }
    wx.navigateTo({
      url: url
    })
  },
  github: function() {
    wx.setClipboardData({
      data: 'https://github.com/bsafd/dnUI-weapp.git',
      success(res) {
        wx.getClipboardData({
          success(res) {
            util.toast("链接已复制",2000,true)
          }
        })
      }
    })
  },
  previewReward: function() {
    wx.previewImage({
      urls: ["https://static.uookk.com/dnzs.jpg"]
    })
  },
  clickZansan() {
    this.setData({
      zansan: true
    })
  },
  hidezansan() {
    this.setData({
      zansan: false
    })
  },
  handleClickzansan(e) {
    let index = e.detail.index;
    util.toast("还是谢过客官")
    this.hidezansan()
  },
  // https://tc-glasses.oss-cn-beijing.aliyuncs.com/product/20200116/c9b622fb54c946d1ae246d176f634367.jpg
})