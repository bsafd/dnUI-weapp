const util = require('../../../utils/util.js')
Page({
  data: {
    height: 64, //header高度
    top: 0, //标题图标距离顶部距离
    scrollH: 0, //滚动总高度
    opcity: 0,
    iconOpcity: 0.5,
    banner: [
      "https://gd2.alicdn.com/imgextra/i2/3085332847/O1CN01c14zsQ1WtyB8PzfMq_!!3085332847.jpg_400x400.jpg",
      "https://gd1.alicdn.com/imgextra/i2/3085332847/O1CN01LtJC6h1WtyB6I9Mqs_!!3085332847.jpg_400x400.jpg",
      "https://gd1.alicdn.com/imgextra/i1/3085332847/O1CN01vrb9nh1WtyB6ICNvR_!!3085332847.jpg",
      "https://gd1.alicdn.com/imgextra/i1/3085332847/O1CN015IARpK1WtyB8GBcy9_!!3085332847.jpg",      "https://img.alicdn.com/imgextra/https://img.alicdn.com/bao/uploaded/i1/374632943/O1CN01sV55IJ1XbwChdE9JH_!!374632943.jpg_430x430q90.jpg",
      "https://img.alicdn.com/imgextra/i1/2100258080/O1CN01isdctQ29YgkvAYepb_!!2100258080.jpg",
      "https://img.alicdn.com/imgextra/i2/3300112355/O1CN01i6mXFZ1TGdIlv1icW_!!3300112355.jpg_430x430q90.jpg"
    ],
    bannerIndex: 0,
    attrItem:5,
    topMenu: [{
      icon: "message",
      text: "消息",
      size: 26,
      badge: 3
    }, {
      icon: "home",
      text: "首页",
      size: 23,
      badge: 0
    }, {
      icon: "people",
      text: "我的",
      size: 26,
      badge: 0
    }, {
      icon: "cart",
      text: "购物车",
      size: 23,
      badge: 2
    }, {
        icon: "service",
      text: "客服小蜜",
      size: 26,
      badge: 0
    }, {
        icon: "compose",
      text: "我要反馈",
      size: 23,
      badge: 0
    }, {
      icon: "share",
      text: "分享",
      size: 26,
      badge: 0
    }],
    menuShow: false,
    popupShow: false,
    value: 1,
    collected: false
  },
  onLoad: function (options) {
    let obj = wx.getMenuButtonBoundingClientRect();
    this.setData({
      width: obj.left,
      height: obj.top + obj.height + 8,
      top: obj.top + (obj.height - 32) / 2
    }, () => {
      wx.getSystemInfo({
        success: (res) => {
          this.setData({
            scrollH: res.windowWidth
          })
        }
      })
    });
  },
  bannerChange: function (e) {
    this.setData({
      bannerIndex: e.detail.current
    })
  },
  previewImage: function (e) {
    let index = e.currentTarget.dataset.index;
    wx.previewImage({
      current: this.data.banner[index],
      urls: this.data.banner
    })
  },
  //页面滚动执行方式
  onPageScroll(e) {
    let scroll = e.scrollTop <= 0 ? 0 : e.scrollTop;
    let opcity = scroll / this.data.scrollH;
    if (this.data.opcity >= 1 && opcity >= 1) {
      return;
    }
    this.setData({
      opcity: opcity,
      iconOpcity: 0.5 * (1 - opcity < 0 ? 0 : 1 - opcity)
    })
  },
  back: function () {
    wx.navigateBack()
  },
  openMenu: function () {
    this.setData({
      menuShow: true
    })
  },
  closeMenu: function () {
    this.setData({
      menuShow: false
    })
  },
  showPopup: function () {
    this.setData({
      popupShow: true
    })
  },
  hidePopup: function () {
    this.setData({
      popupShow: false
    })
  },
  change: function (e) {
    this.setData({
      value: e.detail.value
    })
  },
  collecting: function () {
    this.setData({
      collected: !this.data.collected
    })
  },
  common: function () {
    util.toast("功能开发中~")
  },
  submit() {
    this.hidePopup()
    wx.navigateTo({
      url: '../mall-extend/submitOrder/submitOrder'
    })
  },
  coupon(){
    wx.navigateTo({
      url: '../mall-extend/coupon/coupon'
    })
  },
  attrItemActive: function (e) {
    this.setData({
      attrItem: e.currentTarget.dataset.index
    })
  },
})