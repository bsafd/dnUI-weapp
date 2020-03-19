let globalData = getApp().globalData;
const util = require('../../utils/util.js')
Page({
  data: {
    version: globalData.version,
    logList: [{
      version: "preface",
      date: "2020-01-11",
      log: ["基于项目及历史原因，将原PC端的dnUI移植到手机端，等稳定后，会同步更新至支付宝小程序，百度小程序，头条小程序及抖音小程序等"]
    }, {
        version: "1.0.1",
        date: "2020-01-13",
        log: ["1.UOOKK UI代码片段整理", "2.bug修复，以及部分兼容问题修复，代码优化"]
      }, {
        version: "1.0.2",
        date: "2020-01-15",
        log: ["1.新增step组件。", "2.新增swicth组件。", "3.优化上传组件，支持宽高及大小判断", "4.优化了grid组件问题。", "5.分包，解决小程序预览时包体积超出限制的问题。"]
      }, {
        version: "1.1.0",
        date: "2020-01-16",
        log: ["1.新增Avatar组件。", "2.新增imgPicker上传支件，不同于原有upload，使之支持图大体积，大小判断，支持每行分布数量。", "3.优化card组件，支持图片top及bottom属性，支持header是否含avatar"]
      }, {
        version: "1.1.1",
        date: "2020-01-27",
        log: ["1.优化了tabbar插件，扩展背景色，图标，阴影属性。", "2.修正了tag组件在plain模式下circle属性被覆盖的问题。", "3.修正了badge组件slot时样式定位的问题。", "4.新增了优惠券coupon组件。"]
      }].reverse()
  },
  onLoad: function(options) {

  },
  getLink(e) {
    let link = e.currentTarget.dataset.link
    wx.setClipboardData({
      data: link,
      success(res) {
        wx.getClipboardData({
          success(res) {
            util.toast("链接已复制", 2000, true)
          }
        })
      }
    })
  }
})